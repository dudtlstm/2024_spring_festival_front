import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import * as S from "./style";
import OpenEyeImg from "../../../../../public/booth/openeye.png";
import CloseEyeImg from "../../../../../public/booth/pw.png";

function ReplyDeleteModal({
  isOpen,
  onClose,
  description,
  title,
  boothId,
  commentId,
  password: modalPassword,
  onPasswordChange,
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
    if (isConfirmEnabled) {
      axios
        .delete(
          `https://mua-dongguk-server.site/api/v1/booth/${boothId}/comments/${commentId}`,
          {
            data: { password: password },
          }
        )
        .then((response) => {
          setResponseStatus(response.status);
          // console.log("댓글이 성공적으로 삭제되었습니다.");
          onClose();
          window.location.reload();
        })
        .catch((error) => {
          setResponseStatus(error.response ? error.response.status : 500);
          // console.error("댓글 삭제 중 오류:", error);
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
          <S.SiteConnectTitle>댓글 삭제</S.SiteConnectTitle>
          <S.SiteConnectContent>
            댓글을 삭제하려면 <br />
            비밀번호 4자리를 입력해주세요!
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
    </S.IsModal>
  );
}

ReplyDeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  boothId: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
};

export default ReplyDeleteModal;
