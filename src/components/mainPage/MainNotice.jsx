import React, { useState, useEffect } from "react";
import * as S from "./style/style";
import TitleComponent from "./Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchNoticeList } from "../../apis/api/getNotice";
import PromotionModal from "../common/modal/promotionModal/PromotionModal";

function MainNotice() {
  const [noticeData, setNoticeData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

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
    slidesToShow: 2.8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
    ],
    // beforeChange: (_, newIndex) => {
    //   setCurrentIndex(newIndex);
    // },
  };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  const openModal = (url) => {
    setSelectedUrl(
      url || "https://www.instagram.com/donggukstuco?igsh=MTA2dzdyNHM3MjQxYQ=="
    );
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUrl("");
  };

  const handleConfirm = () => {
    window.open(selectedUrl, "_blank");
    closeModal();
  };

  return (
    <S.NoticeWrapper>
      <TitleComponent title={"공지"} to={"notice"} />
      <S.NoticeContainer>
        <Slider {...settings}>
          {noticeData.map((d) => (
            <div key={d.id} onClick={() => openModal(d.insta_url)}>
              <S.NoticeCard>
                <S.NoticeImg
                  src={d.thumbnail || "/image/common/default.png"}
                  loading="lazy"
                />
                <S.NoticeTitle>{truncateTitle(d.title, 8)}</S.NoticeTitle>
                <S.NoticeDes>{d.short_description}</S.NoticeDes>
              </S.NoticeCard>
            </div>
          ))}
        </Slider>
      </S.NoticeContainer>
      <PromotionModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
        description="축제기획단 인스타그램으로 이동합니다."
        title="인스타그램 연결"
      />
    </S.NoticeWrapper>
  );
}

export default MainNotice;
