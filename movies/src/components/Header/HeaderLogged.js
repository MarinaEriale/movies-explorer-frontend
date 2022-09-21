import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";
import NavigationLogged from "../Navigation/NavigationLogged";
import "./HeaderLogged.css";

function HeaderLogged() {
  return (
    <header className="headerLogged">
      <Link to="/">
        <img
          src={headerLogo}
          alt="Зелёный круг с волнистыми краями"
          className="logo"
        />
      </Link>
      <NavigationLogged />
    </header>
  );
}

export default HeaderLogged;
