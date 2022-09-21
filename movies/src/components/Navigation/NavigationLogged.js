import React from "react";
import "./NavigationLogged.css";
import accLogo from "../../images/acc_logo.svg";
import { Link } from "react-router-dom";

function NavigationLogged() {
  return (
    <div className="navigationLogged">
      <div className="navigationLogged__buttons">
        <Link to="/movies">
          <button type="button" className="navigationLogged__movies">
            Фильмы
          </button>
        </Link>
        <Link to="/saved-movies">
          <button type="button" className="navigationLogged__saved-movies">
            Сохранённые фильмы
          </button>
        </Link>
      </div>
      <button type="button" className="navigationLogged__account">
        <img
          src={accLogo}
          alt="Схематичное изображение головы и плеч человека"
          className="navigationLogged__logo"
        ></img>
        <Link to="/profile" className="navigationLogged__account-name">Аккаунт</Link>
      </button>
      <button className="navigationLogged__burger">&#9776;</button>
    </div>
  );
}

export default NavigationLogged;
