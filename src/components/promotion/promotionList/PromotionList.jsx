import React, { useState, useEffect } from 'react';
import * as S from './style';
import Card from '../card/Card';
import PromotionTitle from '../promotionTitle/PromotionTitle';

import { getPromotions } from '../../../apis/api/promotion';

function PromotionList() {

    // 영신이를 위한 영시니의 예시 데이터
    // const [promotions, setPromotions] = useState([
    //     { id: 1, title: '이루리이루미다', description: '응애응애 소원을 온라인으로 빌어봐요 응애', img: examImg1, url: 'https://iirumi.com/'},
    //     { id: 2, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    //     { id: 3, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    //     { id: 4, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    //     { id: 5, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 ㅇㅇㅇ대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    //     { id: 6, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    //     { id: 7, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 dsㅇㅇㅇㅇㅇㅇ알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    //     { id: 8, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},

    //     { id: 9, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    //     { id: 10, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    //     { id: 11, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    //     { id: 12, title: '어흥멋쟁이사자처럼', description: '응애응애 멋사에 대해 알아봐요 응애', img: examImg1, url: 'https://likelion-dgu.com/'},
    // ]);
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
                    console.error("Fetched data is not an array:", data);
                }
            } catch (error) {
                console.error("Failed to fetch promotions: ", error);
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