import styled from 'styled-components';

export const PromotionListWrapper = styled.div`
    display: flex;
    padding: 32px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    // border: 1px solid red;
`;

export const PromotionListCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    gap: 44px 16px;
`;