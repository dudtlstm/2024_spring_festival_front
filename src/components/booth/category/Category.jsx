import React from 'react';
import * as S from './style';

const Category = () => {
  return (
    <S.CategoryWrapper>
      <S.CategoryItems>
        <S.CategorySelectedItem>부스</S.CategorySelectedItem>
        <S.CategoryItem>푸드트럭</S.CategoryItem>
      </S.CategoryItems>
    </S.CategoryWrapper>
  );
};

export default Category;
