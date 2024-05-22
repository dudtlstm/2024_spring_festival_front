import { styled } from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 210px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 18px;
  padding-bottom: 72px; /* nav */

  background: var(--use-background-background---section, #fbfbfb);
  color: var(--use-font-font---info, #929292);
  font-family: Pretendard;
  font-size: 12px;
`;
export const Copyright = styled.div`
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
`;
export const DesignSupport = styled.div`
  color: var(--use-font-font---disable, #c4c4c4);
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
`;

export const ContectContainer = styled.div`
  width: 100%;
  padding: 0 46px;
  display: flex;
  justify-content: space-around;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--use-font-font---info, #929292);

  /* Caption */
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 120% */
`;
