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

  background-color: #ffdcdc;

  color: black;
  font-size: 35px;
`;

const NotFound = () => {
  return (
    <>
      <GlobalStyle />
      <BackGroundColor>
        <div>😖😖😖</div>
        <br />
        Sorry, <br />
        the page not found <br />
        <br />
        <div>애도라 화잇팅이얏 XD🩷</div>
      </BackGroundColor>
    </>
  );
};

export default NotFound;
