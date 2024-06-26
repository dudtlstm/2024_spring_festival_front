import styled, { css } from "styled-components";
export const Title = styled.div`
  color: var(--use-font-font---head, #151515);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.48px;
  padding: 0px 20px;
  margin-bottom: 16px;
`;

export const Detail = styled.div`
  color: var(--use-font-font---head, #151515);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.25px;
  flex: 1 0 0;
  padding: 0px 20px;
`;
export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 390px;
  margin: 0 auto; /* 부모 요소를 화면 중앙에 배치 */
`;

export const ImageNotice = styled.img`
  max-width: 100%; /* 이미지의 너비를 부모 요소에 맞춤 */
  max-height: 100%; /* 이미지의 높이를 부모 요소에 맞춤 */
  flex-shrink: 0;
`;

export const RightButton = styled.button`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  fill: var(--use-background-background---deep, #f1f1f1);
  background-color: rgba(241, 241, 241, 1);
  position: absolute;
  border-radius: 20%;
  right: 0;
  &::before {
    content: ">";
    font-size: 16px;
    color: white;
  }
`;

export const LeftButton = styled.button`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  fill: var(--use-background-background---deep, #f1f1f1);
  background-color: rgba(241, 241, 241, 1);
  border-radius: 20%;
  position: absolute;
  left: 0;
  &::before {
    content: "<";
    font-size: 16px;
    color: white;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 32px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 6px;
  margin: 0 4px;
  background: var(--use-background-background---deep, #f1f1f1);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.active &&
    css`
      width: 36px;
      background: var(--main-red-100, #fa9487);
      border-radius: 8px;
    `}
`;

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
  margin-left: 15px;
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
