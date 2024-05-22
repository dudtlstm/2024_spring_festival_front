import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import Lineup from "../../components/timeTable/lineup/Lineup";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";

const TimeTable_29 = () => {
  return (
    <div>
      <RealtimeEvent />
      <Lineup />
      <TimeLine date={29} />
    </div>
  );
};

export default TimeTable_29;
