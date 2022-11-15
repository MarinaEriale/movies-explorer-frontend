import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";
import loginLogo from "../../images/logo.svg";
import * as auth from "../../utils/auth";

function Login({ onLogin }) {
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });

  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues((previousState) => ({
  //     ...previousState,
  //     [name]: value,
  //   }));
  // };

  const handleLoginSubmit = (data) => {
    // e.preventDefault();
    auth
      .authorize(data.email, data.password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          onLogin();
          navigate("/movies");
        }
      })
      .catch((err) => console.log("Ошибка", err));
  };

  const loginButtonName = `login__enter-button ${
    !isValid ? "login__enter-button_disabled" : ""
  }`;

  const loginTextNameForEmail = `login__text ${
    errors.email ? "login__text_mistaken" : ""
  }`;

  const loginTextNameForPassword = `login__text ${
    errors.password ? "login__text_mistaken" : ""
  }`;
  

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
        <form
          className="login__form"
          onSubmit={handleSubmit(handleLoginSubmit)}
        >
          <label htmlFor="email" className="login__label">
            E-mail
          </label>
          <input
            {...register("email", {
              required: "Обязательно укажите e-mail",
              pattern: {
                value:
                  /^(?!.{65})([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\-.+]+)@([a-z0-9]+)((([.]?|[_-]{0,2})[a-z0-9]+)*)\.([a-z]{2,})$/,
                message: "Введите e-mail в формате example@mail.com",
              },
            })}
            id="email"
            type="email"
            placeholder="E-mail"
            className={loginTextNameForEmail}
          />
          <div className="login__error">
            {errors?.email && (
              <p className="login__error-text">
                {errors?.email?.message || "Ошибка введенных данных"}
              </p>
            )}
          </div>
          <label htmlFor="password" className="login__label">
            Пароль
          </label>
          <input
            {...register("password", {
              required: "Обязательно укажите пароль",
            })}
            id="password"
            type="password"
            placeholder="Пароль"
            className={loginTextNameForPassword}
          />
          <div className="login__error">
            {errors?.password && (
              <p className="login__error-text">
                {errors?.password?.message || "Ошибка введенных данных"}
              </p>
            )}
          </div>
          <button type="submit" className={loginButtonName} disabled={!isValid}>
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
