import React from "react";

import "./Card.css";

function Card({ img, text, price }) {
  return (
    <li className="card">
      <div className="card__img-wrapper">
        <img className="card__img" src={img} alt="фотография техники"></img>
      </div>

      <p className="card__text">{text}</p>
      <p className="card__price">{price} ₽</p>
    </li>
  );
}

export default Card;
