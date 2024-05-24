import React, { useEffect, useState } from 'react';
import * as S from './style';
import BoothImg from '../../../../public/booth/booth.png';
import LikeIcon from '../../../../public/booth/like.svg';
import TimeIcon from '../../../../public/booth/time.svg';
import PinIcon from '../../../../public/booth/pin.svg';
import LocationIcon from '../../../../public/booth/location.svg';
import { booth } from '../../../apis/api/booth';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../common/Spinner';

const dummyData = [
  {
    id: 1,
    img: BoothImg,
    name: '부스 이름',
    like: 186,
    time: '(화,수,목) 11:00 ~ 11:00',
    location: '멀티미디어공학과',
  },
  {
    id: 2,
    img: BoothImg,
    name: '부스 이름',
    like: 186,
    time: '(화,수,목) 11:00 ~ 11:00',
    location: '멀티미디어공학과',
  },
];

const BoothList = ({ date, category, data, onLocationClick }) => {
  const navigate = useNavigate();
  const handleCardClick = id => {
    navigate(`/booths/${id}`);
  };
  // useEffect(() => {
  //   fetchData();
  // }, [category]);

  // const fetchData = async () => {
  //   try {
  //     const result = await booth(date, category);
  //     console.log(result);
  //     if (Array.isArray(result)) {
  //       setBoothListData(result);
  //     } else {
  //       // console.error('Expected an array but got:', result);
  //     }
  //   } catch (error) {
  //     // console.error('Fetch data error: ', error);
  //   }
  // };

  return (
    <S.BoothListWrapper>
      {data.length > 0 ? (
        data.map(booth => (
          <S.BoothCardWrapper key={booth.id}>
            <S.BoothCardContent onClick={() => handleCardClick(booth.id)}>
              {/* 부스 이미지 */}
              <S.BoothCardImg src={booth.thumbnail || BoothImg} />
              <S.BoothCardContentInfo>
                <S.BoothCardContentInfoTitle>
                  {booth.name.length < 14
                    ? booth.name
                    : booth.name.slice(0, 14) + '...'}
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
                    {booth.location}
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
