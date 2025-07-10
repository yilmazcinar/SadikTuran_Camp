import { useState } from "react";
import { sculptureList } from "../data";

function ReactState() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index];

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(sculptureList.length - 1);
    }
  }

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
      <button onClick={handlePreviousClick}>GERİ</button>
      <button onClick={handleNextClick}>İLERİ</button>
      <h2>
        <i>
          {sculpture.name} by{" "}
          <span style={{ color: "red" }}>{sculpture.artist}</span>
        </i>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      {showMore && <p>{sculpture.description}</p>}
      <div>
        <button onClick={handleMoreClick}>
          {showMore ? "Detay Gizle" : "Detay Göster"}
        </button>
      </div>
    </>
  );
}

export default ReactState;
