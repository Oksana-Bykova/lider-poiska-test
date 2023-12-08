import React from "react";

import { useDispatch } from "react-redux";


import "./CardCatalog.css";
import { setItemInCart } from "../../redux/cart/reducer";

function CardCatalog({ card }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(card));
  };


  return (
    <li className="card">
      <div className="card__img-wrapper">
        <img
          className="card__img"
          src={card.img}
          alt="фотография техники"
        ></img>
      </div>

      <p className="card__text">{card.name}</p>
      <p className="card__price">{card.price} ₽</p>
      <button className="card__button" onClick={handleAddToCart}>
        в корзине
      </button>
    </li>
  );
}

export default CardCatalog;
