import React from "react";
import * as S from "./style";

const PerformanceCard = ({ performance }) => {
  // 공연 시간에 따른 height 값 조절을 위한 변수
  const timeCheck =
    (new Date(`2024/05/28 ${performance.endTime}`) -
      new Date(`2024/05/28 ${performance.startTime}`)) /
    1800000;

  return (
    <S.PerformanceCardWrapper
      bgcolor={performance.now ? "now" : "not"}
      bordercolor={performance.now ? "now" : "not"}
      timeslots={timeCheck}
    >
      <S.PerformanceTeam>{performance.name}</S.PerformanceTeam>
      <S.PerformanceTime>{performance.time}</S.PerformanceTime>
    </S.PerformanceCardWrapper>
  );
};

export default PerformanceCard;
