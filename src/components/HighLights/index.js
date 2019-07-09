import React from "react";
import Description from "./Description";
import Discount from "./Discount";

const HighLights = () => {
  return (
    <div className="highlight_wrapper" style={{ marginTop: "130px" }}>
      <Description />
      <Discount />
    </div>
  );
};

export default HighLights;
