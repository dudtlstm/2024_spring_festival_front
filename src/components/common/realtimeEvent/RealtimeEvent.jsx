import React from "react";
import * as S from "./style";

const RealtimeEvent = ({ marginTop }) => {
  return (
    <S.Wrapper marginTop={marginTop}>
      <S.RealtimeEventWrapper>
        <img src="./common/loudspeaker.svg" alt="📣" />
        <S.RealtimeTxt>
          <S.RealtimeBold>만해광장</S.RealtimeBold>에서{" "}
          <S.RealtimeBold>축기단 콘텐츠</S.RealtimeBold>가 진행중이에요!
        </S.RealtimeTxt>
      </S.RealtimeEventWrapper>
    </S.Wrapper>
  );
};

export default RealtimeEvent;
