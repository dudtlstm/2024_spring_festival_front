import React from "react";
import * as S from "./style";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <S.NavWrapper>
      <Link to="/booths">
        <S.NavContainer>
          <img src="./layout/nav/notice.svg" alt="📖" />
          <div>공지</div>
        </S.NavContainer>
      </Link>
      <Link to="/timeTable">
        <S.NavContainer>
          <img src="./layout/nav/booth.svg" alt="🍔" />
          <div>부스</div>
        </S.NavContainer>
      </Link>
      <Link to="/">
        <S.NavContainer>
          <img src="./layout/nav/home.svg" alt="🏠" />
          <div>홈</div>
        </S.NavContainer>
      </Link>
      <Link to="/notice">
        <S.NavContainer>
          <img src="./layout/nav/performance.svg" alt="🎉" />
          <div>공연</div>
        </S.NavContainer>
      </Link>
      <Link to="/promotion">
        <S.NavContainer>
          <img src="./layout/nav/promotion.svg" alt="💡" />
          <div>홍보</div>
        </S.NavContainer>
      </Link>
    </S.NavWrapper>
  );
};

export default Nav;
