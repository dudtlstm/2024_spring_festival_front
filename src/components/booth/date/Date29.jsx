import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Date29 = () => {
  return (
    <>
      {/* <div>Booth</div>
      <Link to={'/booths/1'}>detail 이동</Link> */}
      <S.DateWrapper>
        <S.Date>
          <Link to={'/booth28'}>
            <S.DateItem>28일</S.DateItem>
          </Link>
          <S.DateSelectedItem>29일</S.DateSelectedItem>
          <S.DateItem>30일</S.DateItem>
        </S.Date>
      </S.DateWrapper>
    </>
  );
};

export default Date29;
