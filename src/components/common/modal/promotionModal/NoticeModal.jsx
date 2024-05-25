import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as S from "./style";

function NoticeModal({ isOpen, onClose, onConfirm, description, title, link }) {
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

  const handleConfirm = () => {
    window.open(link, "_blank");
    onConfirm();
  };

  return (
    <S.IsModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="사이트 연결 확인"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      // zIndex={200}
    >
      <S.SiteConnectWrapper ref={modalRef}>
        <S.SiteConnect>
          <S.SiteConnectTitle>인스타그램 연결</S.SiteConnectTitle>
          <S.SiteConnectContent2>
            축제기획단 인스타그램으로 이동합니다.
          </S.SiteConnectContent2>
          <S.SiteConnectButton>
            <S.SiteConnectCancle onClick={onClose}>취소</S.SiteConnectCancle>
            <S.SiteConnectConfirm onClick={handleConfirm}>
              확인
            </S.SiteConnectConfirm>
          </S.SiteConnectButton>
        </S.SiteConnect>
      </S.SiteConnectWrapper>
    </S.IsModal>
  );
}

export default NoticeModal;
