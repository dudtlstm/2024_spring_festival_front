import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
`;

export const CardImgContainer = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
`;

export const CardImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: var(--use-background-background---deep, #F1F1F1);
    object-fit: cover;
`;

export const CardContentTitle = styled.div`
    color: var(--use-font-font---body, #474747);

    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */
    letter-spacing: -0.16px;
`;

export const CardContentDesc = styled.div`
    height: 32px;
    align-self: stretch;

    color: var(--use-font-font---info, #929292);

    /* Body3 */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
`;