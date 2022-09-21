import React from "react";
import "./Promo.css";
import promoLogo from "../../images/landing-logo.svg";

function Promo() {
  return (
    <div className="promo">
      <img
        src={promoLogo}
        alt="Схематичное изображение планеты Земля с помощью множества слов web"
        className="promo__logo"
      ></img>
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button type="button" className="promo__button">
          Узнать больше
        </button>
      </div>
    </div>
  );
}

export default Promo;
