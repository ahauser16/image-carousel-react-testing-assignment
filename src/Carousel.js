import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  // Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx((currCardIdx + 1) % total);
  }

  // Decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx((currCardIdx - 1 + total) % total);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
        />
        {currCard && (
          <Card
            caption={currCard.caption}
            src={currCard.src}
            currNum={currCardIdx + 1}
            totalNum={total}
          />
        )}
        <i
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;