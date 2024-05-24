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
  display: flex;
  -webkit-transform: translateY(100%);

  .slick-track {
    width: 100%;
    display: flex;
    padding-left: 70px;

    @media (max-width: 391px) {
      padding-left: 33px;
    }

    @media (max-width: 320px) {
      padding-left: 70px;
    }
  }

  .slick-slider {
    width: 100%;
  }
  .slick-list {
    overflow: hidden;
    height: 120px;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    flex: 0 0 auto;
  }
`;

export const MiniBannerItem = styled.img`
  width: 100px !important;
  height: 100px !important;
  border-radius: 20px;
  cursor: pointer;
  object-fit: cover;

  &.active {
    box-shadow: 0px 0px 8px 0px rgba(247, 100, 78, 0.6);
    transform: scale(1.1);
  }
`;
