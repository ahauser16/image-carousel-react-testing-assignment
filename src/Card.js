import React from "react";
import "./Card.css";

 function Card({caption, src, currNum, totalNum}) {

  return (
    <div className="Card">
      <h4 className="Card-title">{caption}</h4>
      <img className="Card-image" src={src} alt={caption} />
      <small className="Card-small">
        Image {currNum} of {totalNum}.
      </small>
    </div>
  );
}

export default Card;
