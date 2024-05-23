import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";

const DateSelector = ({ date }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dates = [28, 29, 30];
  const [selectedDate, setSelectedDate] = useState(date);
  // const [selectedDate, setSelectedDate] = useState(28);

  const handleDateClick = (date) => {
    setSelectedDate(date);

    const pathnameDiv = location.pathname.split("/").slice(0, -1).join("/");
    navigate(`${pathnameDiv}/${date}`);
  };

  return (
    <>
      {/* <div>Booth</div>
      <Link to={'/booths/1'}>detail 이동</Link> */}
      <S.DateSelectorWrapper>
        <S.DateSelector>
          {dates.map((date, index) => (
            <S.DateSelectorItem
              key={index}
              onClick={() => handleDateClick(date)}
              bgcolor={selectedDate === date ? "#F97C69" : " #FBFBFB"}
              color={selectedDate === date ? "#FFFFFF" : " #C4C4C4"}
            >
              {date}일
            </S.DateSelectorItem>
          ))}
        </S.DateSelector>
      </S.DateSelectorWrapper>
    </>
  );
};

export default DateSelector;
