import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "40vh",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loader;
