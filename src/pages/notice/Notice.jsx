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
        <div>카드를 클릭하면 해당 서비스로 이동합니다!</div>
      </S.NoticeTitleWrapper>
      <S.CardWrapper>
        {notice.map((promo) => (
          <Link key={promo.id} to={`/notice/${promo.id}`}>
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
          </Link>
        ))}
      </S.CardWrapper>
    </div>
  );
};

export default Notice;
