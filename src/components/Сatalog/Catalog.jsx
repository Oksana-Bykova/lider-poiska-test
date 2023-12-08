import React from "react";
import "./Catalog.css";
import { data } from "../../constants/constants";
import Card from "../CardCatalog/CardCatalog";

function Catalog() {
  return (
    <section className="catalog">
      <h2 className="catalog__title">Каталог товаров</h2>
      <ul className="catalog__list">
       { data.map((item) => (
            <Card key ={item.id }
            card = {item}
            ></Card>
       ))
       }
      </ul>
    </section>
  );
}

export default Catalog;
