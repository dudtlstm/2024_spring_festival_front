import React, { useEffect, useState } from "react";
import * as S from "./style";
import { fetchRealtimeEvent } from "../../../apis/api/realtimeEvent";

const RealtimeEvent = () => {
  const [realtime, setRealtime] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const realtimeList = await fetchRealtimeEvent();
      setRealtime(realtimeList);
    };

    fetchData();
  }, []);

  return (
    <S.Wrapper>
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
