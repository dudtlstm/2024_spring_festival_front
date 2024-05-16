import { styled } from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 210px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 24px;
  padding-bottom: 50px; /* nav */

  background-color: #f1f2fb;
  color: var(--use-font-font---info, #4e4f58);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  text-align: center;
`;

export const ContectContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-around;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  color: var(--use-font-font---info, #4e4f58);

  /* Caption */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`;
