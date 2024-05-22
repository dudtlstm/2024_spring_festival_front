import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Date30 = () => {
  return (
    <>
      {/* <div>Booth</div>
      <Link to={'/booths/1'}>detail 이동</Link> */}
      <S.DateWrapper>
        <S.Date>
          <Link to={'/booth/28'}>
            <S.DateItem>28일</S.DateItem>
          </Link>
          <Link to={'/booth/29'}>
            <S.DateItem>29일</S.DateItem>
          </Link>
          <S.DateSelectedItem>30일</S.DateSelectedItem>
        </S.Date>
      </S.DateWrapper>
    </>
  );
};

export default Date30;
