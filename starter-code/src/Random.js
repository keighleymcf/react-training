import React from "react";

const Random = props => {
  return (
    <div>
      <p>
        Random value between {props.data.min} and {props.data.max} =>{" "}
        {Math.floor(Math.random() * props.data.max) + props.data.min}
      </p>
    </div>
  );
};

export default Random;
