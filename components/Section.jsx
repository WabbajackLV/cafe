import React from "react";
import coffeeCup from "../img/coffeeCup";
import coffeeBeans from "../img/coffee-beans";

function Section() {
  return (
    <div>
      <div>SIR</div>
      <img className="coffeeBeans" src={coffeeBeans} alt="" />
      <h1>Rustic Cup</h1>
      <hr />
      <h3>A homelike friendly cafe</h3>
      <img className="coffeeCup" src={coffeeCup} alt="" />
    </div>
  );
}

export default Section;
