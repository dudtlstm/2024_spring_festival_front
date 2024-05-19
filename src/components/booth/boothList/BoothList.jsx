import React, { useEffect, useState } from 'react';
import * as S from './style';
import BoothImg from '../../../../public/booth/booth.png';
import LikeIcon from '../../../../public/booth/like.svg';
import TimeIcon from '../../../../public/booth/time.svg';
import PinIcon from '../../../../public/booth/pin.svg';
import LocationIcon from '../../../../public/booth/location.svg';

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

const BoothList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <S.BoothListWrapper>
      {data.map(booth => (
        <S.BoothCardWrapper key={booth.id}>
          <S.BoothCardContent>
            {/* 부스 이미지 */}
            <S.BoothCardImg src={booth.img} />
            <S.BoothCardContentInfo>
              <S.BoothCardContentInfoTitle>
                {booth.name}
              </S.BoothCardContentInfoTitle>

              {/* 좋아요 */}
              <S.BoothCardContentInfoLike>
                <S.BoothCardContentInfoLikeImg src={LikeIcon} />
                <S.BoothCardContentInfoLikeCnt>
                  {booth.like}
                </S.BoothCardContentInfoLikeCnt>
              </S.BoothCardContentInfoLike>

              {/* 시간 */}
              <S.BoothCardContentInfoTime>
                <S.BoothCardContentInfoTimeImg src={TimeIcon} />
                <S.BoothCardContentInfoTimeText>
                  {booth.time}
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
          <S.BoothCardContentLocation>
            <S.BoothCardContentLocationWrapper>
              <S.BoothCardContentLocationImg src={LocationIcon} />
              <S.BoothCardContentLocationText>
                위치보기
              </S.BoothCardContentLocationText>
            </S.BoothCardContentLocationWrapper>
          </S.BoothCardContentLocation>
        </S.BoothCardWrapper>
      ))}
    </S.BoothListWrapper>
  );
};

export default BoothList;
