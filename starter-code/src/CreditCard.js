import React from "react";

const CreditCard = props => {
  const divStyle = {
    backgroundColor: `${props.data.bgColor}`,
    color: `${props.data.color}`,
    width: "300px"
  };
  return (
    <div style={divStyle}>
      <img width="50px" src={props.data.img} alt="" />
      <h2>**** **** **** {props.data.number.slice(-4)}</h2>
      <p>
        Expires {props.data.expirationMonth}/
        {props.data.expirationYear.toString().slice(-2)}
        {props.data.bank}
      </p>
      <p>{props.data.owner}</p>
    </div>
  );
};

export default CreditCard;
