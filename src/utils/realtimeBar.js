// ---- top 값을 반환하는 함수 ---- 
export const realtimeBar = (festaDate) =>{
  const today = new Date();
  const festa = new Date(`2024/05/${festaDate} 13:00:00`);

  let diffMin;
  let diffMSec;

  if (festaDate == today.getDate()) {
    diffMSec = today.getTime() - festa.getTime();
    diffMin = Math.round(diffMSec / (60 * 1000));
    return diffMin;
  } 
  else {return false};
};

// ---- 타임테이블 표 생성을 위한 시간 정보 ----
export const timeSlot = () =>{
  const timeSlots = [];

  for (let hour = 13; hour < 22; hour++) {
    timeSlots.push(`${hour}:00`);
    timeSlots.push(`${hour}:30`);
  }

  timeSlots.push("22:00");

  return timeSlots
}
