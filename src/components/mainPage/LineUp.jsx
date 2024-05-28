import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/style";
import TitleComponent from "./Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchArtistImages } from "../../apis/api/getLineUp";
import Spinner from "../common/Spinner";

function LineUp() {
  const [artistImages, setArtistImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const lineUpRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const day =
        today.getDate() === 29 || today.getDate() === 30 ? today.getDate() : 29;
      const imageData = await fetchArtistImages(day);
      setArtistImages(imageData);
      setLoading(false);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     slider.slickPause();
  //   }

  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (slider) {
  //         if (entry.isIntersecting) {
  //           slider.slickPlay();
  //         } else {
  //           slider.slickGoTo(0, true);
  //           slider.slickPause();
  //         }
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: 0.2,
  //   });

  //   if (lineUpRef.current) {
  //     observer.observe(lineUpRef.current);
  //   }

  //   return () => {
  //     if (lineUpRef.current) {
  //       observer.unobserve(lineUpRef.current);
  //     }
  //   };
  // }, []);

  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: false,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <S.LineUpWrapper>
      <TitleComponent
        title={"라인업"}
        to={`/performance/${
          new Date().getDate() === 29 || new Date().getDate() === 30
            ? new Date().getDate()
            : 29
        }`}
        marginTop={"32px"}
      />
      <S.LineUpImgWrapper>
        {loading ? (
          <Spinner />
        ) : (
          <Slider {...settings}>
            {artistImages.map((imageUrl, index) => (
              <S.LineUpImg key={index} src={imageUrl} loading="lazy" />
            ))}
          </Slider>
        )}
      </S.LineUpImgWrapper>
    </S.LineUpWrapper>
  );
}

export default LineUp;
