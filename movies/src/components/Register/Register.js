import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import registerLogo from "../../images/logo.svg";

function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <Link to="/">
          <img
            src={registerLogo}
            alt="Зелёный круг с волнистыми краями"
            className="registerLogo"
          />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__label">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            className="register__text"
          />
          <label className="register__label">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className="register__text"
          />
          <label className="register__label">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            className="register__text"
          />
          <button type="submit" className="register__enter-button">
            Зарегистрироваться
          </button>
          <p className="register__login">Уже зарегистрированы?
          <Link to="/signin" className="register__login-link">Войти</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
