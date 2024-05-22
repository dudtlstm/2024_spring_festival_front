import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <S.NavWrapper>
      <Link to="booth/28">
        <div>부스</div>
      </Link>
      <Link to="timeTable">
        <div>타임테이블</div>
      </Link>
      <Link to="/">
        <div>🏠</div>
      </Link>
      <Link to="notice">
        <div>공지</div>
      </Link>
      <Link to="promotion">
        <div>홍보</div>
      </Link>
    </S.NavWrapper>
  );
};

export default Nav;
