import React, { useEffect, useRef } from "react";
import * as S from "./promotionModal/style";

const BoothShareModal = ({ isOpen, onClose }) => {
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

  return (
    <S.IsModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="복사 완료"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
    >
      <S.SiteConnectWrapper ref={modalRef}>
        <S.SiteConnect>
          <S.SiteConnectTitle>복사 완료</S.SiteConnectTitle>
          <S.SiteConnectContent2>
            클립보드에 링크가 복사되었습니다.
          </S.SiteConnectContent2>
          <S.SiteConnectButton>
            <S.SiteConnectConfirm onClick={onClose}>확인</S.SiteConnectConfirm>
          </S.SiteConnectButton>
        </S.SiteConnect>
      </S.SiteConnectWrapper>
    </S.IsModal>
  );
};

export default BoothShareModal;
