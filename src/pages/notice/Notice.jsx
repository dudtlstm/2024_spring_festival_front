import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../../components/notice/style";
import Spinner from "../../components/common/Spinner";
import NoticeModal from "../../components/common/modal/promotionModal/NoticeModal";
// import BoothImg from "../../../public/booth/booth.png"; // 적절한 경로로 수정

const Notice = ({ noticeId }) => {
  const [notice, setNotice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(
          "https://mua-dongguk-server.site/api/v1/notice"
        );
        console.log(response.data);

        setNotice(response.data);
      } catch (error) {
        console.error("Error fetching notice:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, []);

  const handleCardClick = (promo) => {
    setSelectedNotice(promo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNotice(null);
  };

  const handleImageError = (e) => {
    e.target.src = "../../../public/booth/booth.png";
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>; // 에러 발생 시 에러 메시지 표시
  }

  return (
    <div>
      <S.NoticeTitleWrapper>
        <img src="/promotion/promotionTitle.svg" alt="홍보안내문구" />
        <div>카드를 클릭하면 축제기획단 인스타로 이동합니다!</div>
      </S.NoticeTitleWrapper>
      <S.CardWrapper>
        {notice.map((promo) => (
          <div key={promo.id} onClick={() => handleCardClick(promo)}>
            <S.Card>
              <S.CardImgContainer>
                <S.CardImage
                  src={promo.thumbnail}
                  alt={`${promo.title} 이미지`}
                  onError={handleImageError}
                />
              </S.CardImgContainer>
              <S.CardTitle>{promo.title}</S.CardTitle>
              <S.CardDescription>{promo.short_description}</S.CardDescription>
            </S.Card>
          </div>
        ))}
      </S.CardWrapper>
      {selectedNotice && (
        <NoticeModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleCloseModal}
          title="인스타그램 연결"
          description="축제기획단 인스타그램으로 이동합니다."
          link={selectedNotice.insta_url}
        />
      )}
    </div>
  );
};

export default Notice;
