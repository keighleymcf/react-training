import React from "react";

const rules = {
  fr: "Bonjour",
  de: "Hallo",
  en: "Hello",
  es: "Hola"
};

const Greeting = props => {
  let greeting = "";
  for (let key in rules) {
    if (props.data.lang === key) {
      greeting = rules[key];
    }
  }
  return (
    <div>
      <p>
        {greeting} {props.data.name}
      </p>
    </div>
  );
};

export default Greeting;
