import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import logo from "../../images/header/lp_logo 1.svg";
import basket from "../../images/header/Fill.svg";
import "./Header.css";


function Header() {


const data = useSelector(state => state.cart.itemsInCart);

const items = data.reduce((acc, item) => {
  for (let i = 0; i < item.count; i++) {
    acc++;
  }
  return acc;
}, 0);



  return (
    <section className="header">
      
        <div className="header__logo-container">
          <img className="header__logo" alt="логотип" src={logo}></img>
        </div>

        <div className="header__container-for-basket">
          
        {items > 0 ? (
      <Link to="/basket" className="header__link">
        <img className="header__img-basket" alt="картинка корзины" src={basket}></img>
        <span className="header__text">Корзина  </span>
        <span className="header__count"> {items} </span>
      </Link>
    ) : (
      <div className="header__link">
        <img className="header__img-basket" alt="картинка корзины" src={basket}></img>
        <span className="header__text">Корзина</span>
      </div>
    )}
          
        </ div>
      
    </section>
  );
}

export default Header;
