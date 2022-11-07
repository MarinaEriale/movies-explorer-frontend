import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import registerLogo from "../../images/logo.svg";
import * as auth from "../../utils/auth";

function Register({ onLogin }) {
  const [values, setValues] = useState({
    name: "",
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
      .register(values.name, values.email, values.password)
      .then((res) => {
        if (res.status !== 400) {
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
        }
      })
      .catch((err) => {
        console.log("Ошибка", err);
      });
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img
            src={registerLogo}
            alt="Зелёный круг с волнистыми краями"
            className="registerLogo"
          />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <label className="register__label">Имя</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Имя"
            className="register__text"
            required="required"
            value={values.name}
            onChange={handleChange}
          />
          {/* <span className="register__error">Что-то пошло не так...</span> */}
          <label className="register__label">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className="register__text"
            required="required"
            value={values.email}
            onChange={handleChange}
          />
          <label className="register__label">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Пароль"
            className="register__text"
            required="required"
            value={values.password}
            onChange={handleChange}
          />
          <button type="submit" className="register__enter-button">
            Зарегистрироваться
          </button>
          <p className="register__login">
            Уже зарегистрированы?
            <Link to="/signin" className="register__login-link">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
