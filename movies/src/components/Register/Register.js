import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Register.css";
import registerLogo from "../../images/logo.svg";
import * as auth from "../../utils/auth";

function Register({ onLogin }) {
  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues((previousState) => ({
  //     ...previousState,
  //     [name]: value,
  //   }));
  // };

  const handleRegisterSubmit = (data) => {
    // e.preventDefault();
    auth
      .register(data.name, data.email, data.password)
      .then((res) => {
        if (res.status !== 400) {
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
        }
      })
      .catch((err) => {
        console.log("Ошибка", err);
      });
  };

  const registerButtonName = `register__enter-button ${
    !isValid ? "register__enter-button_disabled" : ""
  }`;

  const registerTextNameForName = `register__text ${
    errors.name ? "register__text_mistaken" : ""
  }`;

  const registerTextNameForEmail = `register__text ${
    errors.email ? "register__text_mistaken" : ""
  }`;

  const registerTextNameForPassword = `register__text ${
    errors.password ? "register__text_mistaken" : ""
  }`;

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
        <form
          className="register__form"
          onSubmit={handleSubmit(handleRegisterSubmit)}
        >
          <label className="register__label">Имя</label>
          <input
            {...register("name", {
              required: "Обязательно укажите имя",
              pattern: {
                value: /^([A-Za-zА-Яа-яЁё\s-]){2,30}$/,
                message: "Используйте кириллицу, латиницу и пробел",
              },
              minLength: {
                value: 2,
                message: "Имя должно быть не короче 2 символов",
              },
              maxLength: {
                value: 30,
                message: "Имя не должно быть длиннее 30 символов",
              },
            })}
            id="name"
            type="text"
            placeholder="Имя"
            className={registerTextNameForName}
          />
          <div className="register__error">
            {errors?.name && (
              <p className="register__error-text">
                {errors?.name?.message || "Ошибка введенных данных"}
              </p>
            )}
          </div>
          <label className="register__label">E-mail</label>
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
            className={registerTextNameForEmail}
          />
          <div className="register__error">
            {errors?.email && (
              <p className="register__error-text">
                {errors?.email?.message || "Ошибка введенных данных"}
              </p>
            )}
          </div>
          <label className="register__label">Пароль</label>
          <input
            {...register("password", {
              required: "Обязательно укажите пароль",
            })}
            id="password"
            type="password"
            placeholder="Пароль"
            className={registerTextNameForPassword}
          />
          <div className="register__error">
            {errors?.password && (
              <p className="register__error-text">
                {errors?.password?.message || "Ошибка введенных данных"}
              </p>
            )}
          </div>
          <button
            type="submit"
            className={registerButtonName}
            disabled={!isValid}
          >
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
