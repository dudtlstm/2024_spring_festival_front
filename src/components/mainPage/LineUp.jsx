import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/style";
import TitleComponent from "./Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchArtistImages } from "../../apis/api/getLineUp";

function LineUp() {
  const [artistImages, setArtistImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const imageData = await fetchArtistImages("someDay");
      setArtistImages(imageData);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.slickPause();
    }
  }, []);

  const settings = {
    ref: sliderRef,
    focusOnSelect: true,
    dots: false,
    infinite: false,
    autoplaySpeed: 200,
    speed: 1000,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <S.LineUpWrapper>
      <TitleComponent title={"라인업"} to={"/timeTable"} />
      <S.LineUpImgContainer>
        {loading ? (
          <Slider {...settings}>
            {[1, 2, 3].map((index) => (
              <S.LineUpImg key={index} src={`/image/mainpage/Lineup_1.png`} />
            ))}
          </Slider>
        ) : (
          <Slider {...settings}>
            {artistImages.map((imageUrl, index) => (
              <S.LineUpImg key={index} src={imageUrl} />
            ))}
          </Slider>
        )}
      </S.LineUpImgContainer>
    </S.LineUpWrapper>
  );
}

export default LineUp;
