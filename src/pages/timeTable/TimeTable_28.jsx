import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";
import Test from "../../components/common/Test";

const TimeTable_28 = () => {
  return (
    <div>
      <Test />
      <RealtimeEvent date={28} />
      <TimeLine date={28} />
    </div>
  );
};

export default TimeTable_28;
