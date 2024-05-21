import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

export const TitleText = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

export const MoreInfo = styled.div`
  color: #c4c4c4;
  font-weight: 500;
  font-size: 12px;
`;

export const LineUpWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
`;

export const LineUpImgContainer = styled.div`
  /* border: 1px solid red; */
  margin-top: 20px;
  width: 100%;
  overflow: hidden;
  /* display: flex; */
  flex-direction: row;
  /* height: 100px; */
  gap: 20px;
`;

export const LineUpImg = styled.img`
  width: 150px;
`;
