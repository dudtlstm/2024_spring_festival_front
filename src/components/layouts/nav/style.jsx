import { styled } from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 430px;

  display: flex;
  padding: 12px 20px 16px 20px;
  justify-content: space-between;
  align-items: flex-start;

  position: fixed;
  bottom: 0px;

  background: #fff;
  box-shadow: 0px -2px 4px 0px rgba(226, 230, 239, 0.25);

  /* z-index: 50; */
`;
export const NavContainer = styled.div`
  display: flex;
  width: 56px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;

  color: ${(props) => props.fontcolor};

  /* Caption */
  font-family: Pretendard;
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 120% */
`;
