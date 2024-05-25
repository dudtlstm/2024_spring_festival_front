import styled from "styled-components";
import Modal from "react-modal";

export const IsModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 430px;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  /* mix-blend-mode: multiply; */
  /* z-index: 10000 !important; */
`;

export const CustomOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const SiteConnectWrapper = styled.div`
  display: inline-flex;
  padding: 28px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 11.598px;
  background: var(--use-background-background---main, #fff);
  @media (max-width: 375px) {
    width: 90%;
  }
`;

export const SiteConnect = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const SiteConnectTitle = styled.div`
  width: 262px;
  color: var(--use-font-font---head, #151515);
  text-align: center;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;
`;

export const SiteConnectContent = styled.div`
  width: 262px;
  color: var(--use-font-font---info, #929292);
  text-align: center;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.25px;
`;

export const SiteConnectButton = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const SiteConnectConfirm = styled.div`
  font-family: Pretendard;
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  cursor: pointer;
  border-radius: 8px;
  background: var(--main-red-400, #f97c69);

  color: var(--use-font-font---white, #fff);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.25px;
`;

export const SiteConnectCancle = styled.div`
  font-family: Pretendard;
  display: flex;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  cursor: pointer;

  border-radius: 8px;
  border: 1px solid var(--use-stroke-stroke---main, #c9cad3);

  color: var(--use-font-font---info, #929292);

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.25px;
`;
// 비밀번호
export const PasswordInput = styled.input`
  text-align: center;
  width: 146px;
  height: 40px;
  margin-top: 20px;
  display: flex;
  /* padding: 8px 20px; */
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1.45px solid var(--use-stroke-stroke---main, #c9cad3);
  background: var(--use-background-background---main, #fff);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PasswordIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  /* border: 1px solid red; */
`;
