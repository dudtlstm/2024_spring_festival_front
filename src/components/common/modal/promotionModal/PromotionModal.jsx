import React from "react";
import * as S from "./style";

function PromotionModal({ isOpen, onClose, onConfirm, description, title }) {
  return (
    <S.IsModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="사이트 연결 확인"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      overlayClassName="customOverlay"
    >
      <S.SiteConnectWrapper>
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
    </S.IsModal>
  );
}

export default PromotionModal;
