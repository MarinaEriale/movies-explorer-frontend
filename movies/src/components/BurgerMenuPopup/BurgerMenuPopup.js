import React from "react";
import "./BurgerMenuPopup.css";
import accLogo from "../../images/acc_logo.svg";
import { Link } from "react-router-dom";

function BurgerMenuPopup(props) {
  // console.log(props);
  return (
    <div
      className={`burgerMenuPopup__popup ${
        props.isBurgerOpened ? "burgerMenuPopup__popup_opened" : ""
      }`}
    >
      <div className="burgerMenuPopup__container">
        <div className="burgerMenuPopup__buttons">
          <button
            type="button"
            className="burgerMenuPopup__close-button"
            onClick={props.onClose}
          >
            &#10006;
          </button>
          <ul className="burgerMenuPopup__menu">
            <li className="burgerMenuPopup__point">Главная</li>
            <li className="burgerMenuPopup__point">Фильмы</li>
            <li className="burgerMenuPopup__point">Сохранённые фильмы</li>
          </ul>
        </div>
        <button type="button" className="burgerMenuPopup__account">
          <img
            src={accLogo}
            alt="Схематичное изображение головы и плеч человека"
            className="burgerMenuPopup__logo"
          ></img>
          <Link to="/profile" className="burgerMenuPopup__account-name">
            Аккаунт
          </Link>
        </button>
      </div>
    </div>
  );
}

export default BurgerMenuPopup;
