import { styled } from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 430px;
  height: 50px;

  display: flex;
  padding: 12px 20px 16px 20px;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  bottom: 0px;

  background: #fff;
  box-shadow: 0px -2px 4px 0px rgba(226, 230, 239, 0.25);

  color: var(--use-font-font---info, #4e4f58);

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */

  z-index: 100;
`;
