import React from "react";

const IdCard = props => {
  return (
    <div>
      <p>Last name: {props.data.lastName}</p>
      <p>First Name: {props.data.firstName}</p>
      <p>Gender: {props.data.gender}</p>
      <p>Height: {props.data.height}</p>
      <p>Birthdate: {props.data.birth}</p>
      <img src={props.data.picture} alt="" />
    </div>
  );
};

export default IdCard;
