import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import PerformanceCard from "./PerformanceCard";
import { realtimeBar, timeSlot } from "../../../utils/realtimeBar";
import { fetchAllPerformance } from "../../../apis/api/timetable";
import { isFestaDate } from "../../../utils/currentDate";
import { realtimeBarImg } from "../../../assets/images/performance_images";
import Spinner from "../../common/Spinner";

const TimeLine = ({ date }) => {
  // --------------- useState ---------------
  const [loading, setLoading] = useState(true);
  // 실시간 바의 top 상태 변경
  const [barPosition, setBarPosition] = useState(realtimeBar(date));
  // 팔정도, 대운동장 공연 리스트 상태 변경
  const [paljeongPerformances, setPaljeongPerformances] = useState([]);
  const [grandPerformances, setGrandPerformances] = useState([]);

  // --------------- useRef ---------------
  const scrollRef = useRef(null);
  // 실시간 공연 정보로 이동
  const handleScrollView = () => {
    scrollRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  // --------------- useEffect ---------------
  useEffect(() => {
    const fetchData = async () => {
      // 팔정도 공연 정보
      const paljeongPerformance = await fetchAllPerformance(date, "팔정도");
      setPaljeongPerformances(paljeongPerformance);

      // 대운동장 공연 정보
      const grandPerformance = await fetchAllPerformance(date, "대운동장");
      setGrandPerformances(grandPerformance);
      setLoading(false);
    };

    fetchData();
  }, []);

  // 1분 단위로 실시간 바 위치 정보 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setBarPosition(realtimeBar(date));
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [date]);

  // --------------- view ---------------
  // 타임 테이블 구조 세팅
  const timeSlots = timeSlot();

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
    <>
      {loading ? (
        <Spinner />
      ) : (
        <S.TimeLineWrapper>
          <S.TimeLineTitle>타임 테이블</S.TimeLineTitle>
          {isFestaDate() && (
            <S.RealtimeMove onClick={handleScrollView}>
              현재 진행중인 공연 보기
            </S.RealtimeMove>
          )}
          <S.TimeGrid>
            <div>
              <S.PerformancePlace />
              {timeSlots.map((time, index) => (
                <S.TimeSlot key={index}>{time}</S.TimeSlot>
              ))}
            </div>
            {performanceGrid("대운동장")}
            {performanceGrid("팔정도")}
            <S.RealTimeBar
              ref={scrollRef}
              top={barPosition}
              src={realtimeBarImg}
              zIndex={30}
              alt="----------------------------"
            />
          </S.TimeGrid>
        </S.TimeLineWrapper>
      )}
    </>
  );
};

export default TimeLine;
