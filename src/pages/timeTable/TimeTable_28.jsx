import React from "react";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";
import TimeLine from "../../components/timeTable/timeLine/TimeLine";
import DateSelector from "../../components/booth/dateSelector/DateSelector";
import {
  GuideBold,
  PlaylistGuide,
} from "../../components/timeTable/lineup/style";

const TimeTable_28 = () => {
  return (
    <div>
      <DateSelector date={28} />
      <RealtimeEvent date={28} />
      <TimeLine date={28} />
    </div>
  );
};

export default TimeTable_28;
