import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import axios from "axios";

function PromotionModal({ isOpen, onClose, description, title }) {
  const [password, setPassword] = useState("");
  const [isConfirmEnabled, setIsConfirmEnabled] = useState(false); // 확인 버튼 활성화 상태 추가
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

    // 비밀번호가 4자리인 경우에만 확인 버튼을 활성화
    setIsConfirmEnabled(newPassword.length === 4);
  };

  const handleConfirmClick = () => {
    // 비밀번호 확인 로직 추가 가능
    if (isConfirmEnabled) {
      // 확인 버튼이 활성화된 경우에만 실행
      axios
        .post(`https://mua-dongguk-server.site/api/v1/booth/${1}/comments`, {
          password: parseInt(password), // 숫자로 변환하여 전송
          content: description, // 댓글 내용을 백엔드로 전송
        })
        .then((response) => {
          console.log("댓글과 비밀번호가 성공적으로 전송되었습니다.");
          onClose(); // 모달 닫기
        })
        .catch((error) => {
          console.error("댓글과 비밀번호 전송 중 오류:", error);
        });
    }
  };

  return (
    <S.IsModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="비밀번호 설정"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      // overlayClassName={S.CustomOverlay}
    >
      <S.SiteConnectWrapper ref={modalRef}>
        <S.SiteConnect>
          <S.SiteConnectTitle>비밀번호 설정</S.SiteConnectTitle>
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
                // placeholder="****"
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
    </S.IsModal>
  );
}

export default PromotionModal;
