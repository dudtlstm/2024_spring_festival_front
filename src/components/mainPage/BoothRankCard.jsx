import React from "react";
import * as S from "./style/style";

const BoothRankCard = ({
  src,
  title,
  heartNum,
  descript,
  thumImg,
  onClick,
}) => {
  return (
    <S.BoothRankCardWrapper onClick={onClick}>
      <S.BoothRankNum>
        <S.BoothRankNumImg src={src} />
      </S.BoothRankNum>
      <S.BoothThumImg src={thumImg} />
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
        <S.BoothMoreText>더보기</S.BoothMoreText>
      </S.BoothMore>
    </S.BoothRankCardWrapper>
  );
};

export default BoothRankCard;
