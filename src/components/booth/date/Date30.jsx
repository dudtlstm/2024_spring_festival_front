import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Date30 = props => {
  return (
    <>
      <S.DateWrapper>
        <S.Date>
          <Link to={props.url1}>
            <S.DateItem>28일</S.DateItem>
          </Link>
          <Link to={props.url2}>
            <S.DateItem>29일</S.DateItem>
          </Link>
          <S.DateSelectedItem>30일</S.DateSelectedItem>
        </S.Date>
      </S.DateWrapper>
    </>
  );
};

export default Date30;
