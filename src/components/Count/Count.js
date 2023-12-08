import React from "react";

import "./Count.css";

function Count() {
  return (
    <div className="count">
      <button type="button" className="count__down">
        -
      </button>
      <div className="count__box">
        <input
          type="number"
          className="count__input"
          min="1"
          max="10"
          value="1"
        />
      </div>

      <button type="button" className="count__up">
        +
      </button>
    </div>
  );
}

export default Count;
