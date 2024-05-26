import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 430px;
  height: 52px;
  padding: 4px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;

  border-bottom: 1px solid var(--use-stroke-stroke---disable, #e2e3ec);
  background: var(--use-background-background---main, #fff);

  z-index: 100;
`;
export const ShareImg = styled.img`
  width: 24px;
  height: 24px;
`;
