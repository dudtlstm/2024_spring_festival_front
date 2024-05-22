export const currentDate = () => {
  const today = new Date();
  // console.log("today : ", today.getDate(), typeof today.getDate());
  if (today.getDate() <= 28 && today.getDate() >= 30) return today.getDate();
  else return 28; // 축제 당일이 아닐 경우, 28일로 초기화(공연, 부스 페이지 - 날짜 컴포넌트)
};
// console.log("currentday: ", currentDay());

export const testerDate = () =>{
  const today = new Date();
  // console.log("today : ", today.getDate(), typeof today.getDate());
  if (today.getDate() <= 28 && today.getDate() >= 30) return today.getDate();
  else return today.getDate(); // 축제 당일이 아닐 경우, 해당 일자로 초기화(타임테이블 api 테스트 목적)
}