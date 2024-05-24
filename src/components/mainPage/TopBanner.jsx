import React, { useState } from "react";
import * as S from "./style/topBannerStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    // 날짜가 28, 29, 30 중 하나가 아니라면 28을 반환
    if (![28, 29, 30].includes(day)) {
      return "28";
    }
  };

  const todayDate = getCurrentDate();

  const banners = [
    {
      img: "/image/mainpage/main_BigBanner_0.png",
      miniImg: "/image/mainpage/main_SmallBanner_0.png",
    },
    {
      img: "/image/mainpage/main_BigBanner_1.png",
      miniImg: "/image/mainpage/main_SmallBanner_1.png",
      link: `/booths/${todayDate}`,
    },
    {
      img: "/image/mainpage/main_BigBanner_2.png",
      miniImg: "/image/mainpage/main_SmallBanner_2.png",
      link: `/performance/${todayDate}`,
    },
    {
      img: "/image/mainpage/main_BigBanner_3.png",
      miniImg: "/image/mainpage/main_SmallBanner_3.png",
      link: "/notice",
    },
    {
      img: "/image/mainpage/main_BigBanner_4.png",
      miniImg: "/image/mainpage/main_SmallBanner_4.png",
      link: "/promotion",
    },
    {
      img: "/image/mainpage/main_BigBanner_5.png",
      miniImg: "/image/mainpage/main_SmallBanner_5.png",
      link: `/performance/${todayDate}`,
    },
    {
      img: "/image/mainpage/main_BigBanner_6.png",
      miniImg: "/image/mainpage/main_SmallBanner_6.png",
      //추후 링크 수정 필요
      link: "https://www.instagram.com/dudtlstm/",
    },
  ];

  const settings = {
    focusOnSelect: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 391,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (_, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  return (
    <>
      <S.BannerWrapper>
        <S.BannerContainer>
          <a href={banners[currentIndex].link}>
            <S.BigBannerImg src={banners[currentIndex].img} />
          </a>
          <S.MiniBannerContainer>
            <Slider {...settings}>
              {banners.map((banner, index) => (
                <S.MiniBannerItem
                  key={index}
                  src={banner.miniImg}
                  className={currentIndex === index ? "active" : ""}
                />
              ))}
            </Slider>
          </S.MiniBannerContainer>
        </S.BannerContainer>
      </S.BannerWrapper>
    </>
  );
}

export default TopBanner;
