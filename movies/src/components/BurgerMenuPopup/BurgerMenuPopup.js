import React from "react";
import "./BurgerMenuPopup.css";
import accLogo from "../../images/acc_logo.svg";
import { Link } from "react-router-dom";

function BurgerMenuPopup() {
  return (
    <div className="burgerMenuPopup__popup">
        <div className="burgerMenuPopup__container">
        <button className="burgerMenuPopup__close-button">&#10006;</button>
      <ul className="burgerMenuPopup__menu">
        
        <li className="burgerMenuPopup__point">Главная</li>
        <li className="burgerMenuPopup__point">Фильмы</li>
        <li className="burgerMenuPopup__point">Сохранённые фильмы</li>
      </ul>
      <button type="button" className="burgerMenuPopup__account">
      <img
          src={accLogo}
          alt="Схематичное изображение головы и плеч человека"
          className="burgerMenuPopup__logo"
        ></img>
        <Link to="/profile" className="burgerMenuPopup__account-name">Аккаунт</Link>
      </button>
      </div>
    </div>
  );
}

export default BurgerMenuPopup;
