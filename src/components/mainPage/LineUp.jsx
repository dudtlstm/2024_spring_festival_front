import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/style";
import TitleComponent from "./Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchArtistImages } from "../../apis/api/getLineUp";
import { currentDate } from "../../utils/currentDate";

function LineUp() {
  const [artistImages, setArtistImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const lineUpRef = useRef(null);

  const day = currentDate(); // today가 축제 당일이 아니라면, 28일로 초기화해주는 함수

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const day = today.getDate();
      //api 테스트 위한 코드로 실제로는 day -1 이 아닌 day로 해야 함
      const imageData = await fetchArtistImages(day - 1);
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

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (slider) {
          if (entry.isIntersecting) {
            slider.slickPlay();
          } else {
            slider.slickGoTo(0, true);
            slider.slickPause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    if (lineUpRef.current) {
      observer.observe(lineUpRef.current);
    }

    return () => {
      if (lineUpRef.current) {
        observer.unobserve(lineUpRef.current);
      }
    };
  }, []);

  const settings = {
    ref: sliderRef,
    focusOnSelect: true,
    dots: false,
    infinite: false,
    autoplaySpeed: 500,
    speed: 1000,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <S.LineUpWrapper>
      <TitleComponent
        title={"라인업"}
        to={`/performance/${day}`} // 공연 각 날짜별 페이지로 이동
        marginTop={"32px"}
      />
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
              <S.LineUpImg key={index} src={imageUrl} loading="lazy" />
            ))}
          </Slider>
        )}
      </S.LineUpImgContainer>
    </S.LineUpWrapper>
  );
}

export default LineUp;
