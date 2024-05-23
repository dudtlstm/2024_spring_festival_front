import React, { useEffect, useState } from "react";
import * as S from "./style";
import { fetchRealtimeEvent } from "../../../apis/api/realtimeEvent";
import { loudspeaker } from "../../../assets/images/performance_images";

const RealtimeEvent = () => {
  const [realtime, setRealtime] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  useEffect(() => {
    const fetchData = async () => {
      const realtimeList = await fetchRealtimeEvent();
      setRealtime(realtimeList);
      console.log("실시간바 공연 정보 : ", realtimeList);
    };

    fetchData();
  }, []);

  // 여러 개의 공연이 실시간 진행 중일 경우, 3초 간격으로 띄움
  useEffect(() => {
    if (realtime) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % realtime.length);
      }, 3000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [realtime]);

  console.log(realtime[0]);
  console.log(realtime.length);

  return (
    <S.Wrapper>
      <S.RealtimeEventWrapper isseveral={realtime.length}>
        {realtime?.length > 0 ? (
          <S.RealtimeTxt
            key={realtime[currentIndex].id}
            isseveral={realtime.length}
          >
            <S.Loudspeaker src={loudspeaker} alt="📣" />
            <S.TextWrapper>
              <S.RealtimeBold>{realtime[currentIndex].location}</S.RealtimeBold>
              에서{" "}
              <S.RealtimeBold>{realtime[currentIndex].operator}</S.RealtimeBold>
              (이)가 진행중이에요!
            </S.TextWrapper>
          </S.RealtimeTxt>
        ) : (
          <S.RealtimeTxt>진행중인 컨텐츠가 없습니다!</S.RealtimeTxt>
        )}
      </S.RealtimeEventWrapper>
    </S.Wrapper>
  );
};

export default RealtimeEvent;
