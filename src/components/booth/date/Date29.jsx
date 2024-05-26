import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const Date29 = props => {
  return (
    <>
      <S.DateWrapper>
        <S.Date>
          <Link to={props.url1}>
            <S.DateItem>28일</S.DateItem>
          </Link>
          <S.DateSelectedItem>29일</S.DateSelectedItem>
          <Link to={props.url2}>
            <S.DateItem>30일</S.DateItem>
          </Link>
        </S.Date>
      </S.DateWrapper>
    </>
  );
};

export default Date29;
