import React, { useRef, useState } from "react";
import * as S from "./style";
import PerformanceCard from "./PerformanceCard";
import { realtimeBar } from "../../../utils/realtimeBar";

const TimeLine = () => {
  const [festaDate, setFestaDate] = useState(21);
  const scrollRef = useRef(null);

  const handleScrollView = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // API - 공연 정보
  const performance = [
    {
      id: 1,
      title: "라면땅",
      start_at: "13:00",
      end_at: "14:00",
      during: "13:00 ~ 14:00",
      location: "팔정도",
      is_now: false,
    },
    {
      id: 2,
      title: "아리아",
      start_at: "14:00",
      end_at: "15:00",
      during: "14:00 ~ 15:00",
      location: "팔정도",
      is_now: false,
    },
    {
      id: 3,
      title: "실용무용",
      start_at: "15:00",
      end_at: "16:00",
      during: "15:00 ~ 16:00",
      location: "팔정도",
      is_now: false,
    },
    {
      id: 4,
      title: "선무부",
      start_at: "16:00",
      end_at: "17:00",
      during: "16:00 ~ 17:00",
      location: "팔정도",
      is_now: true,
    },
    {
      id: 5,
      title: "렛츠무드",
      start_at: "15:30",
      end_at: "16:00",
      during: "15:30 ~ 16:00",
      location: "대운동장",
      is_now: false,
    },
    {
      id: 6,
      title: "아리랑",
      start_at: "16:00",
      end_at: "16:30",
      during: "16:00 ~ 16:30",
      location: "대운동장",
      is_now: true,
    },
    {
      id: 7,
      title: "1시간반",
      start_at: "17:00",
      end_at: "18:30",
      during: "17:00 ~ 18:30",
      location: "대운동장",
      is_now: true,
    },
  ];
  // 타임테이블 표 생성을 위한 시간 정보
  const timeSlots = [];

  for (let hour = 13; hour < 22; hour++) {
    timeSlots.push(`${hour}:00`);
    timeSlots.push(`${hour}:30`);
  }

  timeSlots.push("22:00");
  // -----------------------------
  // 현재 시간 정보
  const nowTime = new Date();
  const time = `${nowTime.getHours()}:${nowTime.getMinutes()}`;
  console.log(time);

  // 대운동장 & 팔정도 - col mapping
  const performanceGrid = (location) => {
    return (
      <S.PlaceWrapper>
        <S.PerformancePlace>{location}</S.PerformancePlace>
        {timeSlots.map((time, index) => {
          const currentPerformance = performance.find(
            (perform) =>
              perform.start_at === time && perform.location === location
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
          top={300}
          src="./timeTable/realtimeLine.svg"
          alt=""
        />
      </S.TimeGrid>
    </S.TimeLineWrapper>
  );
};

export default TimeLine;
