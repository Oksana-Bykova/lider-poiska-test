import React from "react";
import { useNavigate } from 'react-router-dom';

import { useSelector } from "react-redux";

import "./Basket.css";
import CardBasket from "../CardBasket/CardBasket";

function Basket() {
  const data = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = data.reduce((acc, item) => (acc += +item.totalPrice), 0);
  const navigate = useNavigate();
  
  if (data.length < 1) {
    navigate('/');
  }

  return (
    <section className="basket">
      <h1 className="basket__title">Корзина</h1>
      <ul className="basket__list">
        {data.map((item) => (
          <CardBasket key={item.id} card={item} />
        ))}
      </ul>
      <div className="basket__sum">Сумма {totalPrice} ₽ </div>
    </section>
  );
}

export default Basket;
