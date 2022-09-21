import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/signup">
        <button type="button" className="navigation__register-button">
          Регистрация
        </button>
      </Link>
      <Link to="/signin">
        <button type="button" className="navigation__enter-button">
          Войти
        </button>
      </Link>
    </div>
  );
}

export default Navigation;
