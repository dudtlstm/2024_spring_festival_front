import React, { useState } from 'react';
import * as S from './style';
import PromotionModal from '../../common/modal/promotionModal/PromotionModal';

function Card(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const handleConfirm = () => {
        if (props.url) {
            window.open(props.url, '_blank');
        }
        setModalIsOpen(false);
    };

    return (
        <>
        <S.CardWrapper onClick={openModal}>
            <S.CardImgContainer>
                <S.CardImg src={props.img} alt={props.title}/>
            </S.CardImgContainer>
                <S.CardContentTitle>{props.title}</S.CardContentTitle>
                <S.CardContentDesc>{props.description}</S.CardContentDesc>
        </S.CardWrapper>
        {modalIsOpen && (
            <PromotionModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                onConfirm={handleConfirm}
                description="해당 서비스로 이동합니다."
                title="사이트 연결"
            />
        )}
        </>
    );
}

export default Card;