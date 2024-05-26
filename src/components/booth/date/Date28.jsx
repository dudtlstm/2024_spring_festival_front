import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Date28 = props => {
  return (
    <>
      <S.DateWrapper>
        <S.Date>
          <S.DateSelectedItem>28일</S.DateSelectedItem>
          <Link to={props.url1}>
            <S.DateItem>29일</S.DateItem>
          </Link>
          <Link to={props.url2}>
            <S.DateItem>30일</S.DateItem>
          </Link>
        </S.Date>
      </S.DateWrapper>
    </>
  );
};

export default Date28;
