import React from "react";

const Rating = props => {
  const darkStar = "★";
  const lightStar = "☆";
  const repeater = Math.round(parseFloat(props.data));
  console.log(repeater);
  return (
    <div>{darkStar.repeat(repeater) + lightStar.repeat(5 - repeater)}</div>
  );
};

export default Rating;
