import React from "react";
import * as S from "./style/style";
import { Link } from "react-router-dom";

const TitleComponent = ({ title, to, marginTop }) => {
  return (
    <S.TitleWrapper $marginTop={marginTop}>
      <S.TitleText>{title}</S.TitleText>
      <Link to={to}>
        <S.MoreInfo>더보기 ></S.MoreInfo>
      </Link>
    </S.TitleWrapper>
  );
};

export default TitleComponent;
