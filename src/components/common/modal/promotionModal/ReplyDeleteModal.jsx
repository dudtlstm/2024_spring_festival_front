import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";

function PromotionModal({ isOpen, onClose, onConfirm, description, title }) {
  const [password, setPassword] = useState("");
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
    setPassword(event.target.value);
  };

  const handleConfirmClick = () => {
    // 비밀번호 확인 로직 추가 가능
    onConfirm(password);
  };

  return (
    <S.IsModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="사이트 연결 확인"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      // overlayClassName={S.CustomOverlay}
    >
      <S.SiteConnectWrapper ref={modalRef}>
        <S.SiteConnect>
          <S.SiteConnectTitle>댓글 삭제</S.SiteConnectTitle>
          <S.SiteConnectContent>
            댓글을 삭제하려면
            <br />
            비밀번호 4자리를 입력해주세요!
            <S.Container>
              <S.PasswordIcon src="../public/booth/pw.png" alt="비밀번호" />
              <S.PasswordInput
                type="password"
                value={password}
                onChange={handlePasswordChange}
                maxLength={4}
                // placeholder="****"
              />
            </S.Container>
          </S.SiteConnectContent>
          <S.SiteConnectButton>
            <S.SiteConnectCancle onClick={onClose}>취소</S.SiteConnectCancle>
            <S.SiteConnectConfirm onClick={handleConfirmClick}>
              확인
            </S.SiteConnectConfirm>
          </S.SiteConnectButton>
        </S.SiteConnect>
      </S.SiteConnectWrapper>
    </S.IsModal>
  );
}

export default PromotionModal;
