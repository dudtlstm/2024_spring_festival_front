import React, { useState, useEffect } from "react";
import * as S from "./style";
import Card from "../card/Card";
import PromotionTitle from "../promotionTitle/PromotionTitle";
import Spinner from "../../common/Spinner";

import { getPromotions } from "../../../apis/api/promotion";

function PromotionList() {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const data = await getPromotions();
        if (Array.isArray(data)) {
          const transformedData = data.map((promotion) => ({
            ...promotion,
            img: promotion.image,
            url: promotion.insta_url,
          }));
          // console.log(transformedData);
          setPromotions(transformedData);
        } else {
          // console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        // console.error("Failed to fetch promotions: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <S.PromotionListWrapper>
          <PromotionTitle />
          <S.PromotionListCards>
            {promotions.slice(0, 5).map(
              (
                promotion // 홍보 서비스 5개만 띄움
              ) => (
                <Card
                  key={promotion.id}
                  id={promotion.id}
                  title={promotion.title}
                  description={promotion.description}
                  img={promotion.img}
                  url={promotion.url}
                />
              )
            )}
            {/* 마지막 인덱스 홍보 게시글 */}
            <Card
              id={promotions[promotions.length - 1].id}
              title={promotions[promotions.length - 1].title}
              description={promotions[promotions.length - 1].description}
              img={promotions[promotions.length - 1].img}
              url={promotions[promotions.length - 1].url}
            />
          </S.PromotionListCards>
        </S.PromotionListWrapper>
      )}
    </>
  );
}

export default PromotionList;
