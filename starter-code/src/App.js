import React from "react";
import logo from "./logo.svg";
import "./App.css";
import IdCard from "./IdCard";
import Greeting from "./Greeting";
import Random from "./Random";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";
import visaLogo from "./assets/img/visa.png";
import mcLogo from "./assets/img/master-card.svg";
import Rating from "./Rating";

const IdCard1 = {
  lastName: "Doe",
  firstName: "John",
  gender: "male",
  height: "1.78m",
  birth: "1992-07-14",
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
};

const IdCard2 = {
  lastName: "Delores",
  firstName: "Obrien",
  gender: "female",
  height: "1.72m",
  birth: "1993-05-11",
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
};

const greeting1 = {
  lang: "de",
  name: "Ludwig"
};

const greeting2 = {
  lang: "fr",
  name: "François"
};

const random1 = {
  min: 1,
  max: 6
};

const random2 = {
  min: 1,
  max: 100
};

const card1 = {
  type: "Visa",
  number: "0123456789018845",
  expirationMonth: 3,
  expirationYear: 2012,
  bank: "BNP",
  owner: "Maxence Bouret",
  bgColor: "#11aa99",
  color: "white",
  img: visaLogo
};
const card2 = {
  type: "Master Card",
  number: "01234567890141245",
  expirationMonth: 3,
  expirationYear: 2021,
  bank: "N26",
  owner: "Maxence Bouret",
  bgColor: "#eeeeee",
  color: "#222222",
  img: mcLogo
};
const card3 = {
  type: "Visa",
  number: "01234246789019945",
  expirationMonth: 12,
  expirationYear: 2019,
  bank: "German Bank",
  owner: "Jane Doe",
  bgColor: "#ddbb55",
  color: "white",
  img: visaLogo
};

function App() {
  return (
    <div className="App">
      <IdCard data={IdCard1} />
      <IdCard data={IdCard2} />
      <Greeting data={greeting1} />
      <Greeting data={greeting2} />
      <Random data={random1} />
      <Random data={random2} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <CreditCard data={card1} />
      <CreditCard data={card2} />
      <CreditCard data={card3} />
      <Rating data="0" />
      <Rating data="1.49" />
      <Rating data="1.5" />
      <Rating data="3" />
      <Rating data="4" />
      <Rating data="5" />
    </div>
  );
}

export default App;
