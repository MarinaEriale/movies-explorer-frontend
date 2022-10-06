import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import loginLogo from "../../images/logo.svg";
import * as auth from "../../utils/auth";

function Login({ onLogin }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .authorize(values.email, values.password)
      .then((res) => {
        if (res.token) {
          setValues({
            email: "",
            password: "",
          });
          localStorage.setItem("jwt", res.token);
          onLogin();
          navigate("/movies");
        }
      })
      .catch((err) => console.log("Ошибка", err));
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <img
            src={loginLogo}
            alt="Зелёный круг с волнистыми краями"
            className="login__logo"
          />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login__label">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className="login__text"
            required="required"
            onChange={handleChange}
          />
          <label htmlFor="password" className="login__label">
            Пароль
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            className="login__text"
            required="required"
            onChange={handleChange}
          />
          <button type="submit" className="login__enter-button">
            Войти
          </button>
          <p className="login__register">
            Ещё не зарегистрированы?
            <Link to="/signup" className="login__register-link">
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
