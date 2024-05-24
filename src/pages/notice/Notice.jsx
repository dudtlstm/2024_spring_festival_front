import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../../components/notice/style";
import { Link } from "react-router-dom";

const Notice = ({ noticeId }) => {
  const [notice, setNotice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>; // 데이터 로딩 중일 때 표시
  }

  if (error) {
    return <div>Error: {error}</div>; // 에러 발생 시 에러 메시지 표시
  }

  return (
    <div>
      <S.NoticeTitleWrapper>
        <img src="./promotion/promotionTitle.svg" alt="홍보안내문구" />
        <div>카드를 클릭하면 축제기획단 인스타로 이동합니다! </div>
      </S.NoticeTitleWrapper>
      <S.CardWrapper>
        {notice.map((promo) => (
          <a
            key={promo.id}
            href={promo.insta_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Card>
              <S.CardImgContainer>
                <S.CardImage
                  src={promo.thumbnail}
                  alt={`${promo.title} 이미지`}
                />
              </S.CardImgContainer>
              <S.CardTitle>{promo.title}</S.CardTitle>
              <S.CardDescription>{promo.short_description}</S.CardDescription>
            </S.Card>
          </a>
        ))}
      </S.CardWrapper>
    </div>
  );
};

export default Notice;
