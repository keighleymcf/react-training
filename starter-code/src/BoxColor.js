import React from "react";

const BoxColor = props => {
  const divStyle = {
    border: "1px solid black",
    background: `rgb(${props.r}, ${props.g}, ${props.b})`,
    width: "100px"
  };
  return <div style={divStyle}>rgb({props.r}, {props.g}, {props.b})</div>;
};

export default BoxColor;
