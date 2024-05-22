import React from "react";
import * as S from "./style/style";
import { Link } from "react-router-dom";

const BoothRankCard = ({ src, title, heartNum, descript, to }) => {
  return (
    <S.BoothRankCardWrapper>
      <S.BoothRankNum>
        <S.BoothRankNumImg src={src} />
      </S.BoothRankNum>
      <S.BoothThumImg src="/image/mainpage/main_bg_0.png" />
      <S.BoothRankInfo>
        <S.BoothRankTitle>{title}</S.BoothRankTitle>
        <S.BoothRankHeart>
          <S.BoothHeartImg src="/image/mainpage/main_heart.png" />
          {heartNum}
        </S.BoothRankHeart>
        <S.BoothRankDes>{descript}</S.BoothRankDes>
      </S.BoothRankInfo>
      <S.BoothMore>
        <S.BoothMoreArrow src="/image/mainpage/main_arrow.png" />
        <Link to={to}>
          <S.BoothMoreText>더보기</S.BoothMoreText>
        </Link>
      </S.BoothMore>
    </S.BoothRankCardWrapper>
  );
};

export default BoothRankCard;
