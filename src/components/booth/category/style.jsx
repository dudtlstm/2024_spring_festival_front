import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  padding: 16px 20px 12px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const CategoryItems = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CategoryItem = styled.div`
  display: flex;
  min-width: 68px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background-color: ${props => props.bgcolor};
  border: 1px solid ${props => props.border};
  color: ${props => props.color};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.25px;
  cursor: pointer;

  @media (max-width: 385px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

export const CategoryReset = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
export const CategoryResetImg = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 385px) {
    width: 18px;
    height: 18px;
  }
`;
export const CategoryResetText = styled.div`
  color: #c4c4c4;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.25px;

  @media (max-width: 385px) {
    font-size: 14px;
  }

  @media (max-width: 345px) {
    font-size: 12px;
  }
`;
