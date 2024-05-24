import { styled } from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 220px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  padding: 20px 51px 34px 51px;

  background: var(--use-background-background---section, #fbfbfb);
  color: var(--use-font-font---info, #929292);
  font-family: Pretendard;
  font-size: 12px;
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const LIKELIONDGU = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
`;

export const DesignSupport = styled.div`
  color: var(--use-font-font---disable, #c4c4c4);
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px;
`;

// 컨택트
export const ContectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 8px;
  background: #E2E3EC;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80px;

  color: var(--use-font-font---info, #929292);

  /* Caption */
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 120% */

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    gap: 4px;
  }

  img {
    display: block;
  }
`;
