import React from "react";
import "./Catalog.css";
import { data } from "../../constants/constants";
import Card from "../Card/Card";

function Catalog() {
  return (
    <section className="catalog">
      <h2 className="catalog__title">Каталог товаров</h2>
      <ul className="catalog__list">
       { data.map((item) => (
            <Card key ={item.id }
            img = {item.img} text= {item.name} price={item.price}
            ></Card>
       ))
       }
      </ul>
    </section>
  );
}

export default Catalog;
