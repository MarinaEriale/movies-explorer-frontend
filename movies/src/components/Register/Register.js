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
    mode: "onChange",
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
              required: true,
              pattern: /^([A-Za-zА-Яа-яЁё\s-]){2,30}$/,
              minlength: 2,
              maxlength: 30,
            })}
            id="name"
            type="text"
            placeholder="Имя"
            className="register__text"
            // value={values.name}
            // onChange={handleChange}
          />
          <label className="register__label">E-mail</label>
          <input
            {...register("email", {
              required: true,
              pattern:
                /^(?!.{65})([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\-.+]+)@([a-z0-9]+)((([.]?|[_-]{0,2})[a-z0-9]+)*)\.([a-z]{2,})$/,
            })}
            id="email"
            type="email"
            placeholder="E-mail"
            className="register__text"

            // value={values.email}
            // onChange={handleChange}
          />
          <label className="register__label">Пароль</label>
          <input
            {...register("password", {
              required: true,
            })}
            id="password"
            type="password"
            placeholder="Пароль"
            className="register__text"
            required="required"
            // value={values.password}
            // onChange={handleChange}
          />
          <button type="submit" className={registerButtonName} disabled={!isValid}>
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
