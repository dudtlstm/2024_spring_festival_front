import React from "react";
import { Link } from "react-router-dom";

const Notice = () => {
  return (
    <>
      <div>Notice</div>
      <Link to={"/notice/1"}>detail 이동</Link>
    </>
  );
};

export default Notice;
