import React, { useState, useEffect } from "react";
import * as S from "./style/style";
import TitleComponent from "./Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { fetchNoticeList } from "../../apis/api/getNotice";

function MainNotice() {
  const [noticeData, setNoticeData] = useState([]);

  useEffect(() => {
    const getNoticeData = async () => {
      const response = await fetchNoticeList();
      setNoticeData(response.data);
    };

    getNoticeData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  return (
    <S.NoticeWrapper>
      <TitleComponent title={"공지"} to={"notice"} />
      <S.NoticeContainer>
        <Slider {...settings}>
          {noticeData.map((d) => (
            <Link to={`/notice/${d.id}`} key={d.id}>
              <S.NoticeCard>
                <S.NoticeImg src={d.thumbnail} loading="lazy" />
                <S.NoticeTitle>{truncateTitle(d.title, 8)}</S.NoticeTitle>
                <S.NoticeDes>{d.short_description}</S.NoticeDes>
              </S.NoticeCard>
            </Link>
          ))}
        </Slider>
      </S.NoticeContainer>
    </S.NoticeWrapper>
  );
}

export default MainNotice;
