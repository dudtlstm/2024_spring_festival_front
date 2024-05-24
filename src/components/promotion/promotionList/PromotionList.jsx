import React, { useState, useEffect } from 'react';
import * as S from './style';
import Card from '../card/Card';
import PromotionTitle from '../promotionTitle/PromotionTitle';

import { getPromotions } from '../../../apis/api/promotion';

function PromotionList() {

    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                const data = await getPromotions();
                if (Array.isArray(data)) {
                    const transformedData = data.map(promotion => ({
                        ...promotion,
                        img: promotion.image,
                        url: promotion.insta_url
                    }));
                    setPromotions(transformedData);
                } else {
                    // console.error("Fetched data is not an array:", data);
                }
            } catch (error) {
                // console.error("Failed to fetch promotions: ", error);
            }
        };

        fetchPromotions();
    }, []);

    return (
        <>
        <S.PromotionListWrapper>
            <PromotionTitle />
            <S.PromotionListCards>
                {promotions.map((promotion) => (
                    <Card
                        key={promotion.id}
                        id={promotion.id}
                        title={promotion.title}
                        description={promotion.description}
                        img={promotion.img}
                        url={promotion.url}
                    />
                ))}
            </S.PromotionListCards>
        </S.PromotionListWrapper>
        </>
    );
}

export default PromotionList;