import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import Lineup from "../../components/timeTable/lineup/Lineup";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";
import Test from "../../components/common/Test";

const TimeTable_30 = () => {
  return (
    <div>
      <Test />
      <RealtimeEvent date={30} />
      <Lineup date={30} />
      <TimeLine date={30} />
    </div>
  );
};

export default TimeTable_30;
