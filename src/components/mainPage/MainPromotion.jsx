import React from "react";
import * as S from "./style/style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleComponent from "./Title";

function MainPromotion() {
  const images = [
    { img: "/image/mainpage/promotion.png" },
    { img: "/image/mainpage/promotion.png" },
  ];

  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: false,
    autoplaySpeed: 200,
    speed: 1000,
    slidesToShow: 1.8,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <S.PromotionWrapper>
      <TitleComponent title={"홍보"} to={"/promotion"} />
      <S.PromotionContainer>
        <Slider {...settings}>
          {images.map((img, index) => (
            <S.PromotionImg key={index} src={img} />
          ))}
        </Slider>
        <S.PromotionCount>1 / 15</S.PromotionCount>
      </S.PromotionContainer>
    </S.PromotionWrapper>
  );
}

export default MainPromotion;
