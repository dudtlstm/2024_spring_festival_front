import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import Lineup from "../../components/timeTable/lineup/Lineup";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";

const TimeTable_30 = () => {
  return (
    <div>
      <RealtimeEvent />
      <Lineup />
      <TimeLine date={30} />
    </div>
  );
};

export default TimeTable_30;
