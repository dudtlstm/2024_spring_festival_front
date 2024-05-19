import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import Lineup from "../../components/timeTable/lineup/Lineup";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";

const TimeTable = () => {
  return (
    <div>
      <RealtimeEvent />
      <Lineup />
      <TimeLine />
    </div>
  );
};

export default TimeTable;
