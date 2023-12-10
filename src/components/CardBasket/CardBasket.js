import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer"; 

import Count from "../Count/Count";
import "./CardBasket.css";


function CardBasket({ card }) {
 
    const dispatch = useDispatch();

  const handleDeleteToCart = (e) => {
    e.stopPropagation();
    dispatch(deleteItemFromCart(card.id));
  };

  return (
    <li className="card-basket">
      <div className="card-basket__img-wrapper">
        <img
          className="card-basket__img"
          src={card.img}
          alt="фотография техники"
        ></img>
      </div>

      <p className="card-basket__text">{card.name}</p>
      <div className="card-basket__count"><Count  card ={card} /></div>
      <p className="card-basket__price">{card.totalPrice} ₽</p>
      <button className="card-basket__button" onClick={handleDeleteToCart}> ✕
      </button>
    </li>
  );
}

export default CardBasket;
