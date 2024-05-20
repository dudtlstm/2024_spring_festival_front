import React from "react";
import * as S from "./style";
import PerformanceCard from "./PerformanceCard";

const TimeLine = () => {
  // API - 공연 정보
  const performance = [
    {
      id: 1,
      name: "라면땅",
      startTime: "13:00",
      endTime: "14:00",
      time: "13:00 ~ 14:00",
      place: "팔정도",
      now: false,
    },
    {
      id: 2,
      name: "아리아",
      startTime: "14:00",
      endTime: "15:00",
      time: "14:00 ~ 15:00",
      place: "팔정도",
      now: false,
    },
    {
      id: 3,
      name: "실용무용",
      startTime: "15:00",
      endTime: "16:00",
      time: "15:00 ~ 16:00",
      place: "팔정도",
      now: false,
    },
    {
      id: 4,
      name: "선무부",
      startTime: "16:00",
      endTime: "17:00",
      time: "16:00 ~ 17:00",
      place: "팔정도",
      now: true,
    },
    {
      id: 5,
      name: "렛츠무드",
      startTime: "15:30",
      endTime: "16:00",
      time: "15:30 ~ 16:00",
      place: "대운동장",
      now: false,
    },
    {
      id: 6,
      name: "아리랑",
      startTime: "16:00",
      endTime: "16:30",
      time: "16:00 ~ 16:30",
      place: "대운동장",
      now: true,
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

  return (
    <S.TimeLineWrapper>
      <S.TimeLineTitle>타임 테이블</S.TimeLineTitle>
      <S.RealtimeMove>현재 진행중인 공연 보기</S.RealtimeMove>
      <S.TimeGrid>
        <div>
          <S.PerformancePlace />
          {timeSlots.map((time, index) => (
            <S.TimeSlot key={index}>{time}</S.TimeSlot>
          ))}
        </div>
        <div>
          <S.PerformancePlace>대운동장</S.PerformancePlace>
          {timeSlots.map((time, index) => {
            const currentPerformance = performance.find(
              (perform) =>
                perform.startTime === time && perform.place === "대운동장"
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
        </div>
        <div>
          <S.PerformancePlace>팔정도</S.PerformancePlace>
          {timeSlots.map((time, index) => {
            const currentPerformance = performance.find(
              (perform) =>
                perform.startTime === time && perform.place === "팔정도"
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
        </div>
      </S.TimeGrid>
    </S.TimeLineWrapper>
  );
};

export default TimeLine;
