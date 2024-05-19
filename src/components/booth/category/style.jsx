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
  gap: 12px;
`;
export const CategorySelectedItem = styled.div`
  display: flex;
  min-width: 68px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background-color: #f97c69;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.25px;
`;

export const CategoryItem = styled.div`
  display: flex;
  min-width: 68px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  border: 1px solid #e2e3ec;
  color: #c4c4c4;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.25px;
`;

export const CategoryReset = styled.div``;
export const CategoryResetImg = styled.div``;
export const CategoryResetText = styled.div``;
