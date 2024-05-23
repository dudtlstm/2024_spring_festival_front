import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import Lineup from "../../components/timeTable/lineup/Lineup";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";
import DateSelector from "../../components/booth/dateSelector/DateSelector";

const TimeTable_30 = () => {
  return (
    <div>
      <DateSelector date={30} />
      <RealtimeEvent date={30} />
      <Lineup date={30} />
      <TimeLine date={30} />
    </div>
  );
};

export default TimeTable_30;
