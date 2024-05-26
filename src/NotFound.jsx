import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./style/globalStyle";

const BackGroundColor = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f1f2fb;

  color: #111;
  font-size: 28px;
  font-family: Pretendard;
`;

const NotFound = () => {
  return (
    <>
      <GlobalStyle />
      <BackGroundColor>
        <img src="/lion.png" style={{ width: "200px" }} />
        <br />
        <div style={{ fontSize: "50px", color: "#F7634E", fontWeight: "900" }}>
          "Oops! 😖😖"
        </div>
        <br />
        <br />
        Sorry, <br />
        the page not found <br />
        <br />
      </BackGroundColor>
    </>
  );
};

export default NotFound;
