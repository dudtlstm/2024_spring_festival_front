import React from "react";
import * as S from "./style";

const PerformanceCard = ({ performance }) => {
  // 공연 시간에 따른 height 값 조절을 위한 변수
  const timeCheck =
    (new Date(`2024/05/28 ${performance.end_at}`) -
      new Date(`2024/05/28 ${performance.start_at}`)) /
    1800000;

  return (
    <S.PerformanceCardWrapper
      bgcolor={performance.is_now ? "now" : "not"}
      bordercolor={performance.is_now ? "now" : "not"}
      timeslots={timeCheck}
    >
      <S.PerformanceTeam>{performance.operator}</S.PerformanceTeam>
      <S.PerformanceTime>{performance.during}</S.PerformanceTime>
    </S.PerformanceCardWrapper>
  );
};

export default PerformanceCard;
