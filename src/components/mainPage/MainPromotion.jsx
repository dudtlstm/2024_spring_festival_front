import React, { useState, useEffect } from "react";
import * as S from "./style/style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitleComponent from "./Title";
import { fetchPromotionBanner } from "../../apis/api/getPromotionBanner";

function MainPromotion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageData = await fetchPromotionBanner();
      const formattedImages = imageData.map((data) => ({
        img: data.banner,
      }));
      setImages(formattedImages);
    };

    fetchImages();
  }, []);

  const settings = {
    // focusOnSelect: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  return (
    <S.PromotionWrapper>
      <TitleComponent title={"홍보"} to={"/promotion"} />
      <S.PromotionContainer>
        {images.length > 0 ? (
          <Slider {...settings}>
            {images.map((d, index) => (
              <S.PromotionImg key={index} src={d.img} loading="lazy" />
            ))}
          </Slider>
        ) : (
          <p>🦁 로딩 중! 잠시만 기다려주세요 🦁</p>
        )}
        <S.PromotionCount>
          {currentIndex + 1} / {images.length}
        </S.PromotionCount>
      </S.PromotionContainer>
    </S.PromotionWrapper>
  );
}

export default MainPromotion;
