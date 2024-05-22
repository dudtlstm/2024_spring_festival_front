import React from "react";
import { Link, useLocation } from "react-router-dom";

const Test = () => {
  const location = useLocation().pathname.slice(-1, 2);
  const isCurrentPage = (route) => {
    console.log("loca : ", location, "route: ", route);
    if (location == route) return true;
    else return false;
  };

  return (
    <div>
      <Link
        to={"/performance/28"}
        style={isCurrentPage ? { background: "pink" } : { background: "red" }}
      >
        28
      </Link>
      <Link
        to={"/performance/29"}
        style={isCurrentPage ? { background: "pink" } : { background: "red" }}
      >
        29
      </Link>
      <Link
        to={"/performance/30"}
        style={isCurrentPage ? { background: "pink" } : { background: "red" }}
      >
        30
      </Link>
    </div>
  );
};

export default Test;
