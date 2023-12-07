import React from "react";
import logo from "../../images/header/lp_logo 1.svg";
import basket from "../../images/header/Fill.svg";
import "./Header.css";


function Header() {
  return (
    <section className="header">
      
        <div className="header__logo-container">
          <img className="header__logo" alt="логотип" src={logo}></img>
        </div>

        <div className="header__container-for-basket">
          <img
            className="header__img-basket"
            alt="картинка корзины"
            src={basket}
          ></img>
          <span className="header__text">Корзина</span>
          <span className="header__count"> 1 </span>
        </div>
      
    </section>
  );
}

export default Header;
