import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import PerformanceCard from "./PerformanceCard";
import { realtimeBar, timeSlot } from "../../../utils/realtimeBar";
import { fetchAllPerformance } from "../../../apis/api/timetable";

const TimeLine = ({ date }) => {
  // const [festaDate, setFestaDate] = useState(date); // 축제 당일 날짜
  const [festaDate, setFestaDate] = useState(22); // 개발 단계 임의 날짜
  const [barPosition, setBarPosition] = useState(realtimeBar(festaDate));
  const [paljeongPerformances, setPaljeongPerformances] = useState([]);
  const [grandPerformances, setGrandPerformances] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // 팔정도 공연 정보
      const paljeongPerformance = await fetchAllPerformance(
        festaDate,
        "팔정도"
      );
      // console.log("팔정도 공연 정보:", paljeongPerformance);
      setPaljeongPerformances(paljeongPerformance);

      // 대운동장 공연 정보
      const grandPerformance = await fetchAllPerformance(festaDate, "대운동장");
      // console.log("대운동장 공연 정보:", grandPerformance);
      setGrandPerformances(grandPerformance);
    };

    fetchData();
  }, []);

  // 1분 단위로 실시간 바 위치 정보 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setBarPosition(realtimeBar(festaDate));
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [festaDate]);

  // 타임 테이블 구조 세팅
  const timeSlots = timeSlot();

  // 실시간 공연 정보로 이동
  const handleScrollView = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // 대운동장 & 팔정도 - col mapping
  const performanceGrid = (location) => {
    return (
      <S.PlaceWrapper>
        <S.PerformancePlace>{location}</S.PerformancePlace>
        {timeSlots.map((time, index) => {
          const allPerformance = paljeongPerformances.concat(grandPerformances);
          const currentPerformance = allPerformance.find(
            (perform) =>
              perform.start_at.slice(11, 16) === time &&
              perform.location === location
          );

          return (
            <React.Fragment key={index}>
              <S.EmptySlot>
                {currentPerformance && (
                  <PerformanceCard performance={currentPerformance} />
                )}
              </S.EmptySlot>
            </React.Fragment>
          );
        })}
      </S.PlaceWrapper>
    );
  };

  return (
    <S.TimeLineWrapper>
      <S.TimeLineTitle>타임 테이블</S.TimeLineTitle>
      <S.RealtimeMove onClick={handleScrollView}>
        현재 진행중인 공연 보기
      </S.RealtimeMove>
      <S.TimeGrid>
        <div>
          <S.PerformancePlace />
          {timeSlots.map((time, index) => (
            <S.TimeSlot key={index}>{time}</S.TimeSlot>
          ))}
        </div>
        {performanceGrid("대운동장")}
        {performanceGrid("팔정도")}
        <S.Grid
          ref={scrollRef}
          top={barPosition}
          src="./timeTable/realtimeLine.svg"
          alt="----------------------------"
        />
      </S.TimeGrid>
    </S.TimeLineWrapper>
  );
};

export default TimeLine;
