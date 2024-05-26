import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import * as S from "./style";
import OpenEyeImg from "../../../../../public/booth/openeye.png";
import CloseEyeImg from "../../../../../public/booth/pw.png";

function ReplyModal({
  isOpen,
  onClose,
  description,
  title,
  id,
  onCommentSubmit,
}) {
  const [password, setPassword] = useState("");
  const [isConfirmEnabled, setIsConfirmEnabled] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("modal-open");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    if (/^[0-9]*$/.test(newPassword)) {
      // 숫자인지 확인
      setPassword(newPassword);
      setIsConfirmEnabled(newPassword.length === 4); // 비밀번호가 4자리일 때만 true로 설정
    }
  };

  const handleConfirmClick = () => {
    if (password.length === 4) {
      axios
        .post(`https://mua-dongguk-server.site/api/v1/booth/${id}/comments`, {
          password: password,
          content: description,
        })
        .then((response) => {
          setResponseStatus(response.status); // 성공하면 상태 설정
          // console.log("댓글과 비밀번호가 성공적으로 전송되었습니다.");
          onCommentSubmit(); // 새 댓글을 추가
          onClose(); // 모달 닫기
        })
        .catch((error) => {
          setResponseStatus(error.response ? error.response.status : 500); // 실패하면 상태 설정
          // console.error("댓글과 비밀번호 전송 중 오류:", error);
        });
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <S.IsModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
    >
      <S.SiteConnectWrapper ref={modalRef}>
        <S.SiteConnect>
          <S.SiteConnectTitle>{title}</S.SiteConnectTitle>
          <S.SiteConnectContent>
            댓글 작성에 필요한 <br />
            숫자 4자리를 입력해주세요!
            <S.Container>
              <S.PasswordInput
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                maxLength={4}
              />
              <S.PasswordIcon
                src={isPasswordVisible ? OpenEyeImg : CloseEyeImg}
                alt="비밀번호"
                onClick={togglePasswordVisibility}
              />
            </S.Container>
          </S.SiteConnectContent>
          <S.SiteConnectButton>
            <S.SiteConnectCancle onClick={onClose}>취소</S.SiteConnectCancle>
            <S.SiteConnectConfirm
              onClick={handleConfirmClick}
              disabled={!isConfirmEnabled}
              active={isConfirmEnabled} // 버튼의 활성화 여부에 따라 클래스 적용
              style={{
                backgroundColor: isConfirmEnabled ? "#F97C69" : "#F1F1F1",
                color: isConfirmEnabled ? "white" : "#C4C4C4",
              }}
            >
              확인
            </S.SiteConnectConfirm>
          </S.SiteConnectButton>
        </S.SiteConnect>
      </S.SiteConnectWrapper>
      {responseStatus && (
        <div>응답 상태: {responseStatus === 200 ? "성공" : "실패"}</div>
      )}
    </S.IsModal>
  );
}
ReplyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
};

export default ReplyModal;
