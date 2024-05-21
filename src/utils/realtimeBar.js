// ---- top 값을 반환하는 함수 ---- 
export const realtimeBar = ({festa_date}) =>{
  // const festa = new Date(`2024/05/${festa_date}`);
  // const festa = new Date(`2024/05/${festa_date}`);
  const today = new Date().getDate();

  if (festa_date == today) {
    console.log(festa_date,today,"이제 띄워보자..");
    
  }
};


