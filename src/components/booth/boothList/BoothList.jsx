import React, { useEffect, useState } from "react";
import * as S from "./style";
import BoothImg from "../../../../public/booth/booth.png";
import LikeIcon from "../../../../public/booth/like.svg";
import TimeIcon from "../../../../public/booth/time.svg";
import PinIcon from "../../../../public/booth/pin.svg";
import LocationIcon from "../../../../public/booth/location.svg";
import { booth } from "../../../apis/api/booth";
import { useNavigate } from "react-router-dom";
import Spinner from "../../common/Spinner";

const BoothList = ({ date, category, data, onLocationClick }) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    // navigate(`/booths/${id}`);
    // navigate(`/booths/${id}`, { state: { date } }); // date 포함하여 api 요청
    navigate(`/booths/${date}/${id}`); // date 포함하여 api 요청
  };

  const getBoothImg = (booth) => {
    if (booth.thumbnail) {
      return booth.thumbnail;
    }
    if (Array.isArray(booth.images) && booth.images.length > 0) {
      return booth.images[0];
    }
    return BoothImg;
  };

  return (
    <S.BoothListWrapper>
      {data.length > 0 ? (
        data.map((booth) => (
          <S.BoothCardWrapper key={booth.id}>
            <S.BoothCardContent onClick={() => handleCardClick(booth.id)}>
              {/* 부스 이미지 */}
              <S.BoothCardImg src={getBoothImg(booth)} />
              <S.BoothCardContentInfo>
                <S.BoothCardContentInfoTitle>
                  {booth.name.length < 14
                    ? booth.name
                    : booth.name.slice(0, 14) + "..."}
                </S.BoothCardContentInfoTitle>

                {/* 좋아요 */}
                <S.BoothCardContentInfoLike>
                  <S.BoothCardContentInfoLikeImg src={LikeIcon} />
                  <S.BoothCardContentInfoLikeCnt>
                    {booth.like_cnt}
                  </S.BoothCardContentInfoLikeCnt>
                </S.BoothCardContentInfoLike>

                {/* 시간 */}
                <S.BoothCardContentInfoTime>
                  <S.BoothCardContentInfoTimeImg src={TimeIcon} />
                  <S.BoothCardContentInfoTimeText>
                    {booth.during}
                  </S.BoothCardContentInfoTimeText>
                </S.BoothCardContentInfoTime>

                {/* 위치 */}
                <S.BoothCardContentInfoLocation>
                  <S.BoothCardContentInfoLocationImg src={PinIcon} />
                  <S.BoothCardContentInfoLocationText>
                    {booth.location_info.location}
                  </S.BoothCardContentInfoLocationText>
                </S.BoothCardContentInfoLocation>
              </S.BoothCardContentInfo>
            </S.BoothCardContent>

            {/* 위치보기 버튼 */}
            <S.BoothCardContentLocation
              onClick={() => onLocationClick(booth.id)}
            >
              <S.BoothCardContentLocationWrapper>
                <S.BoothCardContentLocationImg src={LocationIcon} />
                <S.BoothCardContentLocationText>
                  위치보기
                </S.BoothCardContentLocationText>
              </S.BoothCardContentLocationWrapper>
            </S.BoothCardContentLocation>
          </S.BoothCardWrapper>
        ))
      ) : (
        <Spinner />
      )}
    </S.BoothListWrapper>
  );
};

export default BoothList;
