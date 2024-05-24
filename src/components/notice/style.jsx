import styled, { css } from "styled-components";
//Notice css

export const NoticeTitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  /* align-items: flex-start; */
  color: var(--use-font-font---info, #929292);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-top: 32px;
  margin-bottom: 24px;
  margin-left: 20px;
`;

export const CardWrapper = styled.div`
  display: grid;
  flex-direction: column;
  align-items: flex-start;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: row;
  gap: 0px 16px;
  padding: 0px 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 44px;
`;

export const CardTitle = styled.div`
  color: var(--use-font-font---body, #474747);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
  letter-spacing: -0.16px;
`;

export const CardDescription = styled.div`
  height: 32px;
  align-self: stretch;
  color: var(--use-font-font---info, #929292);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  text-align: left;
`;
export const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: var(--use-background-background---deep, #f1f1f1);
  object-fit: cover;
`;
export const CardImgContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;
