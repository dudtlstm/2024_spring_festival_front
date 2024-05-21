// ---- top 값을 반환하는 함수 ---- 
export const realtimeBar = (festaDate) =>{
  const today = new Date();
  const festa = new Date(`2024/05/${festaDate} 13:00:00`);

  let diffMin;
  let diffMSec;

  if (festaDate == today.getDate()) {
    diffMSec = today.getTime() - festa.getTime();
    diffMin = Math.round(diffMSec / (60 * 1000));
  }
  return diffMin;
};


