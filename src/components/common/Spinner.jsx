import React from "react";
import loading from "/common/loading.gif";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "430px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={loading} style={{ width: "40px" }} />
    </div>
  );
};

export default Spinner;
