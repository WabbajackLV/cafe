import React from "react";

function Section() {
  return (
    <div>
      <img
        className="coffeeBeans"
        src={process.env.PUBLIC_URL + "coffee-beans.jpg"}
        alt=""
      />
      <h1>Rustic Cup</h1>
      <hr />
      <h3>A homelike friendly cafe</h3>
      <img
        className="coffeeCup"
        src={process.env.PUBLIC_URL + "coffeeCup.jpg"}
        alt=""
      />
    </div>
  );
}

export default Section;
