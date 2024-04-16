import React from "react";

const Title = ({ subtitle, title }) => {
  return (
    <div>
      <div id="heading">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Title;
