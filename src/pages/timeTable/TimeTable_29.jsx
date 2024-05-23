import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import Lineup from "../../components/timeTable/lineup/Lineup";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";
import Test from "../../components/common/Test";

const TimeTable_29 = () => {
  return (
    <div>
      <Test />
      <RealtimeEvent date={29} />
      <Lineup date={29} />
      <TimeLine date={29} />
    </div>
  );
};

export default TimeTable_29;
