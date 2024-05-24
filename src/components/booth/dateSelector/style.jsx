import { styled } from "styled-components";

export const DateSelectorWrapper = styled.div`
  display: flex;
  padding: 12px 20px;
  align-items: flex-start;
  align-self: stretch;
`;

export const DateSelector = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 24px;
  background-color: #fbfbfb;
`;

export const DateSelectorItem = styled.div`
  display: flex;
  padding: 12px 16px;
  width: 68px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  cursor: pointer;
`;
