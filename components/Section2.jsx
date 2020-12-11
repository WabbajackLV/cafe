import React from "react";

function Section2() {
  return (
    <div>
      <h3 className="offer">What we offer</h3>
      <hr />
      <div className="offerRow">
        <img
          className="leftImg"
          src={process.env.PUBLIC_URL + "/img/cup-coffee.jpg"}
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet
          consequat dapibus. Nam suscipit magna tempor euismod eleifend.
          Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.
        </p>
      </div>
      <div className="offerRowRight">
        <img
          className="rigthImg"
          src={process.env.PUBLIC_URL + "/img/table.png"}
          alt=""
        />
        <p className="paragrRight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet
          consequat dapibus. Nam suscipit magna tempor euismod eleifend.
          Vestibulum et mollis ipsum, eu fermentum ex. Ut a urna at dolor.
        </p>
      </div>
      <div className="offerRow lastOffer">
        <img
          className="leftImg"
          src={process.env.PUBLIC_URL + "/img/about.png"}
          alt=""
        />
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
