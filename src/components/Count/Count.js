import React from "react";
import { upCountCard, downCountCard } from "../../redux/cart/reducer";
import { useDispatch } from "react-redux";

import "./Count.css";

function Count({ card }) {
  
  const dispatch = useDispatch();


  const handleUpClick = (e) => {
    if (card.count >9) {
      return;
    }
    e.stopPropagation();
    dispatch(upCountCard(card.id));
  };

  const handleDownClick = (e) => {
    if (card.count <2) {
      return;
    }
    e.stopPropagation();
    dispatch(downCountCard(card.id));
  };

  return (
    <div className="count">
      <button type="button" className="count__down" onClick={handleDownClick}>
      —
      </button>
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="10"
          value={card.count}
          onChange={() => {}}
        />
      </div>

      <button type="button" className="count__up" onClick={handleUpClick}>
        +
      </button>
    </div>
  );
}

export default Count;
