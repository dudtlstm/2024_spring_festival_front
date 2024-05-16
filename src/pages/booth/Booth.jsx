import React from "react";
import { Link } from "react-router-dom";

const Booth = () => {
  return (
    <>
      <div>Booth</div>
      <Link to={"/booths/1"}>detail 이동</Link>
    </>
  );
};

export default Booth;
