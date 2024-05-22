import React from 'react';
import * as S from "./style";

const PromotionTitle = () => {
    return (
        <S.PromotionTitleWrapper>
            <img src="./promotion/promotionTitle.svg" alt="홍보안내문구" />
            <div>카드를 클릭하면 해당 서비스로 이동합니다!</div>
        </S.PromotionTitleWrapper>
    )
}

export default PromotionTitle