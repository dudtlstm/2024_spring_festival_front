import React, { useState, useEffect } from 'react';
import * as S from './style/style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TitleComponent from './Title';
import { fetchPromotionBanner } from '../../apis/api/getPromotionBanner';
import PromotionModal from '../common/modal/promotionModal/PromotionModal';

function MainPromotion() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      const imageData = await fetchPromotionBanner();
      // 이미지가 null인 경우 필터링
      const formattedImages = imageData
        .filter(data => data.banner !== null)
        .map(data => ({
          img: data.banner,
          url: data.insta_url,
        }));
      setImages(formattedImages);
    };

    fetchImages();
  }, []);

  const settings = {
    rows: 1,
    slidesPerRow: 1,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
  };

  const handleImageClick = url => {
    setSelectedUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUrl('');
  };

  const handleConfirm = () => {
    window.open(selectedUrl, '_blank');
    closeModal();
  };

  return (
    <S.PromotionWrapper>
      <TitleComponent title={'홍보'} to={'/promotion'} />
      <S.PromotionContainer>
        {images.length > 0 ? (
          <Slider {...settings}>
            {images.map((d, index) => (
              <S.PromotionImg
                key={index}
                src={d.img}
                loading="lazy"
                onClick={() => handleImageClick(d.url)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </Slider>
        ) : (
          <p>🦁 로딩 중! 잠시만 기다려주세요 🦁</p>
        )}
        <S.PromotionCount>
          {currentIndex + 1} / {images.length}
        </S.PromotionCount>
      </S.PromotionContainer>

      <PromotionModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
        description="해당 서비스로 이동합니다."
        title="사이트 연결"
      />
    </S.PromotionWrapper>
  );
}

export default MainPromotion;
