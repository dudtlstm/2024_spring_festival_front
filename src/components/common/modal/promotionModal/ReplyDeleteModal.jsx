import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as S from "./style";

function PromotionModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  boothId,
  commentId,
}) {
  const [password, setPassword] = useState("");
  const [deleteError, setDeleteError] = useState(null);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.querySelector('.header').classList.add('modal-open');
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.querySelector('.header').classList.remove('modal-open');
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.querySelector('.header').classList.remove('modal-open');
    };
  }, [isOpen]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmClick = async () => {
    try {
      const response = await axios.delete(
        `https://mua-dongguk-server.site/api/v1/booth/${boothId}/comments/${commentId}`,
        {
          data: { password: parseInt(password) },
        }
      );
      console.log("댓글이 성공적으로 삭제되었습니다.");
      onConfirm(); // 삭제 성공 시 부모 컴포넌트에서 콜백 호출
      onClose(); // 모달 닫기
    } catch (error) {
      console.error("댓글 삭제 중 오류:", error);
      setDeleteError(error.message);
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
            댓글을 삭제하려면
            <br />
            비밀번호 4자리를 입력해주세요!
            <S.Container>
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
            <S.SiteConnectConfirm onClick={handleConfirmClick}>
              확인
            </S.SiteConnectConfirm>
          </S.SiteConnectButton>
        </S.SiteConnect>
      </S.SiteConnectWrapper>
      {deleteError && <div>댓글 삭제 오류: {deleteError}</div>}
    </S.IsModal>
  );
}

export default PromotionModal;
