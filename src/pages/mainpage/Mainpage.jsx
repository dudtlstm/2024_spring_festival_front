import React from "react";

//import component
import TopBanner from "../../components/mainPage/TopBanner";
import LineUp from "../../components/mainPage/LineUp";
import BoothRank from "../../components/mainPage/BoothRank";
import MainNotice from "../../components/mainPage/MainNotice";

const Mainpage = () => {
  return (
    <>
      <TopBanner />
      <LineUp />
      <BoothRank />
      <MainNotice />
    </>
  );
};

export default Mainpage;
