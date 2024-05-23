import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import Lineup from "../../components/timeTable/lineup/Lineup";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";
import DateSelector from "../../components/booth/dateSelector/DateSelector";

const TimeTable_29 = () => {
  return (
    <div>
      <DateSelector date={29} />
      <RealtimeEvent date={29} />
      <Lineup date={29} />
      <TimeLine date={29} />
    </div>
  );
};

export default TimeTable_29;
