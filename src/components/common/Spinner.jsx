import React from "react";
import loading from "/common/loading.gif";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        maxWidth: "430px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loading} style={{ width: "40px", height: "40px" }} />
    </div>
  );
};

export default Spinner;
