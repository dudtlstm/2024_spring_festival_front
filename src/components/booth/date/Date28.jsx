import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Date28 = () => {
  return (
    <>
      {/* <div>Booth</div>
      <Link to={'/booths/1'}>detail 이동</Link> */}
      <S.DateWrapper>
        <S.Date>
          <S.DateSelectedItem>28일</S.DateSelectedItem>
          <Link to={'/booth/29'}>
            <S.DateItem>29일</S.DateItem>
          </Link>
          <Link to={'/booth/30'}>
            <S.DateItem>30일</S.DateItem>
          </Link>
        </S.Date>
      </S.DateWrapper>
    </>
  );
};

export default Date28;
