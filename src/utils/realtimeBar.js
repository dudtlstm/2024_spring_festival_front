import { PlaceWrapper,PerformancePlace } from "../components/timeTable/timeLine/style";

// ---- top 값을 반환하는 함수 ---- 
export const realtimeBar = (festaDate) =>{
  const today = new Date();
  const festa_start = new Date(`2024/05/${festaDate} 13:00:00`);

  let diffMin = today.getTime() - festa_start.getTime(); // 공연 시작 시간으로부터 경과된 시간
  let diffMSec = Math.round(diffMin / (60 * 1000)); // 분 단위로 변경

  if (festaDate == today.getDate() && diffMSec <= 600 && diffMSec >=0) { // 600분(13시 ~ 23시)
    return diffMSec;
  }
  else {return null};
};

// ---- 타임테이블 표 생성을 위한 시간 정보 ----
export const timeSlot = () =>{
  const timeSlots = [];

  for (let hour = 13; hour < 23; hour++) {
    timeSlots.push(`${hour}:00`);
    timeSlots.push(`${hour}:30`);
  }

  timeSlots.push("23:00");

  return timeSlots
}