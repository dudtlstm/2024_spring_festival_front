import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import * as S from "./style";

function PromotionModal({ isOpen, onClose, description, title, id }) {
  const [password, setPassword] = useState("");
  const [isConfirmEnabled, setIsConfirmEnabled] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null); // 응답 상태를 저장할 상태 추가
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    setIsConfirmEnabled(newPassword.length === 4);
  };

  const handleConfirmClick = () => {
    if (isConfirmEnabled) {
      axios
        .post(`https://mua-dongguk-server.site/api/v1/booth/${id}/comments`, {
          password: parseInt(password, 10),
          content: description,
        })
        .then((response) => {
          setResponseStatus(response.status); // 성공하면 상태 설정
          console.log("댓글과 비밀번호가 성공적으로 전송되었습니다.");
          onClose(); // 모달 닫기
        })
        .catch((error) => {
          setResponseStatus(error.response ? error.response.status : 500); // 실패하면 상태 설정
          console.error("댓글과 비밀번호 전송 중 오류:", error);
        });
    }
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
            숫자 4자리를 입력해주세요!{" "}
            <S.Container>
              <S.PasswordIcon src="../public/booth/pw.png" alt="비밀번호" />
              <S.PasswordInput
                type="password"
                value={password}
                onChange={handlePasswordChange}
                maxLength={4}
              />
            </S.Container>
          </S.SiteConnectContent>
          <S.SiteConnectButton>
            <S.SiteConnectCancle onClick={onClose}>취소</S.SiteConnectCancle>
            <S.SiteConnectConfirm
              onClick={handleConfirmClick}
              disabled={!isConfirmEnabled} // 확인 버튼 활성화 여부에 따라 disabled 속성 설정
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

PromotionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PromotionModal;
