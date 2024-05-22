import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import PerformanceCard from "./PerformanceCard";
import { realtimeBar, timeSlot } from "../../../utils/realtimeBar";
import { fetchAllPerformance } from "../../../apis/api/timetable";
import { testerDate } from "../../../utils/currentDate";

const TimeLine = ({ date }) => {
  // const [festaDate, setFestaDate] = useState(date); // 페이지 -> 컴포넌트화 진행시 이 코드 사용
  const [festaDate, setFestaDate] = useState(testerDate()); // 개발 단계에서 실시간 바를 적용해보고자 하는 태스트 용도
  // 실시간 바의 top 상태 변경
  const [barPosition, setBarPosition] = useState(realtimeBar(festaDate));
  // 팔정도, 대운동장 공연 리스트 상태 변경
  const [paljeongPerformances, setPaljeongPerformances] = useState([]);
  const [grandPerformances, setGrandPerformances] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // 팔정도 공연 정보
      const paljeongPerformance = await fetchAllPerformance(
        date,
        // festaDate, // 실시간 더미데이터 확인 용도
        "팔정도"
      );
      // console.log("팔정도 공연 정보:", paljeongPerformance);
      setPaljeongPerformances(paljeongPerformance);

      // 대운동장 공연 정보
      const grandPerformance = await fetchAllPerformance(date, "대운동장");
      // const grandPerformance = await fetchAllPerformance(festaDate, "대운동장"); // 실시간 더미데이터 확인 용도
      // console.log("대운동장 공연 정보:", grandPerformance);
      setGrandPerformances(grandPerformance);
    };

    fetchData();
  }, []);

  // 1분 단위로 실시간 바 위치 정보 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      // setBarPosition(realtimeBar(festaDate)); // 실시간 더미데이터 확인 용도
      setBarPosition(realtimeBar(date));
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
