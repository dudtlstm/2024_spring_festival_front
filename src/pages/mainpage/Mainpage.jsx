import React from "react";

//import component
import TopBanner from "../../components/mainPage/TopBanner";
import LineUp from "../../components/mainPage/LineUp";
import BoothRank from "../../components/mainPage/BoothRank";
import MainNotice from "../../components/mainPage/MainNotice";
import MainPromotion from "../../components/mainPage/MainPromotion";
import RealtimeEvent from "../../components/common/realtimeEvent/RealtimeEvent";

const Mainpage = () => {
  return (
    <>
      <TopBanner />
      <RealtimeEvent marginTop={"70px"} />
      <LineUp />
      <BoothRank />
      <MainNotice />
      <MainPromotion />
    </>
  );
};

export default Mainpage;
