import ReactDom from "react-dom";
import React, { useEffect, useRef } from "react";
import * as S from "./style";

function PromotionModal({ isOpen, onClose, onConfirm, description, title }) {
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

  return ReactDom.createPortal(
    <S.IsModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="서비스 연결 확인"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      // zIndex={200}
      // overlayClassName={S.CustomOverlay}
    >
      <S.SiteConnectWrapper ref={modalRef}>
        <S.SiteConnect>
          <S.SiteConnectTitle>{title}</S.SiteConnectTitle>
          <S.SiteConnectContent>{description}</S.SiteConnectContent>
          <S.SiteConnectButton>
            <S.SiteConnectCancle onClick={onClose}>취소</S.SiteConnectCancle>
            <S.SiteConnectConfirm onClick={onConfirm}>
              확인
            </S.SiteConnectConfirm>
          </S.SiteConnectButton>
        </S.SiteConnect>
      </S.SiteConnectWrapper>
    </S.IsModal>,
    document.querySelector("#portal")
  );
}

export default PromotionModal;
