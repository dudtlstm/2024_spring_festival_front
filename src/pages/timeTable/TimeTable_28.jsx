import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import Lineup from "../../components/timeTable/lineup/Lineup";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";

const TimeTable_28 = () => {
  return (
    <div>
      <RealtimeEvent />
      <Lineup />
      <TimeLine date={28} />
    </div>
  );
};

export default TimeTable_28;
