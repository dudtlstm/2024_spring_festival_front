import styled from 'styled-components';

export const BoothListWrapper = styled.div`
  display: flex;
  padding: 8px 20px 20px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

export const BoothCardWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  justify-content: space-between;
`;

// 콘텐츠
export const BoothCardContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
`;

// 부스 이미지
export const BoothCardImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
`;

// 부스 정보
export const BoothCardContentInfo = styled.div`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BoothCardContentInfoTitle = styled.div`
  color: #474747;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.16px;

  @media (max-width: 359px) {
    font-size: 13px;
  }
`;

export const BoothCardContentInfoLike = styled.div`
  display: flex;
  margin-top: 2px;
  align-items: center;
  gap: 6px;
`;

export const BoothCardContentInfoLikeImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const BoothCardContentInfoLikeCnt = styled.div`
  color: #f97c69;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

// 시간
export const BoothCardContentInfoTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 8px;
`;

export const BoothCardContentInfoTimeImg = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`;

export const BoothCardContentInfoTimeText = styled.div`
  color: #929292;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  @media (max-width: 362px) {
    display: block;
    overflow: hidden;
    width: 105px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

// 위치
export const BoothCardContentInfoLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

export const BoothCardContentInfoLocationImg = styled.img`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
`;

export const BoothCardContentInfoLocationText = styled.div`
  color: #929292;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

// 위치 보기
export const BoothCardContentLocation = styled.div`
  display: flex;
  width: 64px;
  height: 90px;
  padding: 27.5px 14.5px 23.5px 14.5px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  background-color: #fbfbfb;
  cursor: pointer;
`;

export const BoothCardContentLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

export const BoothCardContentLocationImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const BoothCardContentLocationText = styled.div`
  color: #c4c4c4;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
`;
