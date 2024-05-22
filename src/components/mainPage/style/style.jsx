import styled from "styled-components";

//title.jsx
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
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

//lineup.jsx

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

//BoothRank.jsx

export const BoothRankWrapper = styled.div`
  /* border: 1px solid red; */
`;

export const BoothRankBg = styled.div`
  background-color: #fbfbfb;
  width: 100%;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

//BoothRankCard.jsx

export const BoothRankCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const BoothRankNum = styled.div`
  width: 20px;
  height: 24px;
`;

export const BoothRankNumImg = styled.img`
  width: 100%;
`;

export const BoothThumImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`;

export const BoothRankInfo = styled.div`
  width: 50%;
`;

export const BoothRankTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`;

export const BoothRankHeart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #f97c69;
  margin-top: 4px;
  gap: 2px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

export const BoothHeartImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const BoothRankDes = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  color: #929292;
`;

export const BoothMore = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 0px 24px 0px;
  background-color: #f1f1f1;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 90px;
  cursor: pointer;
`;

export const BoothMoreArrow = styled.img`
  width: 24px;
  height: 24px;
`;

export const BoothMoreText = styled.div`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  color: #c4c4c4;
`;

//Promotion.jsx

export const NoticeWrapper = styled.div`
  width: 100%;
`;

export const NoticeContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  gap: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 190px;

  .slick-track {
    width: 100%;
    max-height: 180px;
    padding-left: 140px;

    @media (max-width: 380px) {
      padding-left: 75px;
    }

    @media (max-width: 350px) {
      padding-left: 45px;
    }
  }
`;

export const NoticeCard = styled.div`
  width: 100%;
  max-width: 120px;
  max-height: 180px;
`;

export const NoticeImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
`;

export const NoticeTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-top: 5px;
`;

export const NoticeDes = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  margin-top: 3px;
  color: #929292;
`;
