import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 430px;
`;

export const BannerContainer = styled.div`
  position: relative;
`;

export const BigBannerImg = styled.img`
  width: 100%;
  max-width: 430px;
`;

export const MiniBannerContainer = styled.div`
  width: 100%;
  max-width: 430px;
  gap: 20px;
  position: absolute;
  bottom: 80px;
  left: 0;
  transform: translateY(100%);
  -webkit-transform: translateY(100%);

  .slick-track {
    width: 100%;
    height: 110px;
    padding-left: 60px;

    @media (max-width: 391px) {
      padding-left: 10px;
    }

    @media (max-width: 350px) {
      padding-left: 60px;
    }
  }

  .slick-slider {
    width: 100%;
  }
  .slick-list {
    overflow: hidden;
    height: 110px;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    flex: 0 0 auto;
  }
`;

export const MiniBannerItem = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  cursor: pointer;
  object-fit: cover;

  &.active {
    box-shadow: 0px 0px 8px 0px rgba(247, 100, 78, 0.6);
    transform: scale(1.1);
  }
`;
