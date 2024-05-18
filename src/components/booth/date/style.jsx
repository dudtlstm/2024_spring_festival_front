import { styled } from 'styled-components';

export const DateWrapper = styled.div`
  display: flex;
  padding: 12px 20px;
  align-items: flex-start;
  align-self: stretch;
`;
export const Date = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 24px;
  background-color: #fbfbfb;
`;
export const DateSelectedItem = styled.div`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background-color: #f97c69;
  color: #fff;
  cursor: pointer;
`;

export const DateItem = styled.div`
  display: flex;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background-color: #fbfbfb;
  color: #c4c4c4;
  cursor: pointer;
`;
