import React from "react";

import { useSelector } from "react-redux";

import "./Basket.css";
import CardBasket from "../CardBasket/CardBasket";

function Basket() {
  const data = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = data.reduce((acc, item) => (acc += item.price), 0);

  return (
    <section className="basket">
      <h1 className="basket__title">Корзина</h1>
      <ul className="basket__list">
        {data.map((item) => (
          <CardBasket key={item.id} card={item} />
        ))}
      </ul>
      <div className="basket__sum">{totalPrice} </div>
    </section>
  );
}

export default Basket;
