import React from "react";
import cupCoffee from "../img/cup-coffee";
import table from "../img/table";
import about from "../img/about";

function Section2() {
  return (
    <div>
      <div>siry</div>
      <h3 className="offer">What we offer</h3>
      <hr />
      <div className="offerRow">
        <img className="leftImg" src={cupCoffee} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet
          consequat dapibus. Nam suscipit magna tempor euismod eleifend.
          Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.
        </p>
      </div>
      <div className="offerRowRight">
        <img className="rigthImg" src={table} alt="" />
        <p className="paragrRight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet
          consequat dapibus. Nam suscipit magna tempor euismod eleifend.
          Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.
        </p>
      </div>
      <div className="offerRow lastOffer">
        <img className="leftImg" src={about} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet
          consequat dapibus. Nam suscipit magna tempor euismod eleifend.
          Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.
        </p>
      </div>
    </div>
  );
}

export default Section2;
