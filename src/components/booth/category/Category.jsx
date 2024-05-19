import React from 'react';
import * as S from './style';
import ResetIcon from '../../../../public/booth/reset.svg';

const Category = () => {
  return (
    <S.CategoryWrapper>
      <S.CategoryItems>
        <S.CategorySelectedItem>부스</S.CategorySelectedItem>
        <S.CategoryItem>푸드트럭</S.CategoryItem>
      </S.CategoryItems>

      <S.CategoryReset>
        <S.CategoryResetImg src={ResetIcon} />
        <S.CategoryResetText>초기화</S.CategoryResetText>
      </S.CategoryReset>
    </S.CategoryWrapper>
  );
};

export default Category;
