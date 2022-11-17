import React, { useState } from "react";
import "./NavigationLogged.css";
import accLogo from "../../images/acc_logo.svg";
import { Link, useLocation } from "react-router-dom";

function NavigationLogged(props) {
  const location = useLocation();

  const moviesLinkName = `navigationLogged__movies ${
    location.pathname === "/movies" ? "navigationLogged__movies_active" : ""
  }`;

  const savedMoviesLinkName = `navigationLogged__saved-movies ${
    location.pathname === "/saved-movies"
      ? "navigationLogged__saved-movies_active"
      : ""
  }`;

  // console.log(props.handleBurgerClick);
  return (
    <div className="navigationLogged">
      <div className="navigationLogged__buttons">
        <Link to="/movies">
          <button type="button" className={moviesLinkName}>
            Фильмы
          </button>
        </Link>
        <Link to="/saved-movies">
          <button type="button" className={savedMoviesLinkName}>
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
        <Link to="/profile" className="navigationLogged__account-name">
          Аккаунт
        </Link>
      </button>
      <button
        type="button"
        className="navigationLogged__burger"
        onClick={props.handleBurgerClick}
      >
        &#9776;
      </button>
    </div>
  );
}

export default NavigationLogged;
