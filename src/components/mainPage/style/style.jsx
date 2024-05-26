import styled from 'styled-components';

//title.jsx
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${props => (props.$marginTop ? props.$marginTop : '64px')};
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
`;

export const LineUpImgWrapper = styled.div`
  bottom: 0;
  width: 100%;
  overflow: hidden;
  flex-direction: row;
  /* gap: 20px; */

  .slick-track {
    display: flex;
    align-content: flex-end;
    justify-content: flex-end;
    flex-wrap: wrap-reverse;
  }
`;

export const LineUpImgContainer = styled.div`
  border: 1px solid red;
`;

export const LineUpImg = styled.img`
  width: 100% !important;
`;

//BoothRank.jsx

export const BoothRankWrapper = styled.div``;

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
  margin-left: 5px;
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
  margin-left: auto;
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

//MainNotice.jsx

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
    padding-left: 117px;

    @media (max-width: 380px) {
      padding-left: 75px;
    }

    @media (max-width: 350px) {
      padding-left: 20px;
    }
  }
`;

export const NoticeCard = styled.div`
  width: 100%;
  max-width: 120px;
  max-height: 180px;
  overflow: hidden;
`;

export const NoticeImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  cursor: pointer;
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

//Promotion.jsx

export const PromotionWrapper = styled.div`
  margin-bottom: 30px;
`;

export const PromotionContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;

  .slick-track {
    max-height: 180px;
  }
`;

export const PromotionImg = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background-color: #f1f1f1;
  cursor: pointer;
`;

export const PromotionCount = styled.div`
  padding: 3px 12px;
  font-size: 10px;
  background-color: #fa9487;
  color: white;
  width: 53px;
  border-radius: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  right: 30px;
  transform: translateY(100%);
`;
