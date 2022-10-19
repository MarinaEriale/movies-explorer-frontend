import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.svg";
import NavigationLogged from "../Navigation/NavigationLogged";
import "./HeaderLogged.css";

function HeaderLogged(props) {
  // console.log(props.handleBurgerClick);

  return (
    <header className="headerLogged">
      <Link to="/">
        <img
          src={headerLogo}
          alt="Зелёный круг с волнистыми краями"
          className="logo"
        />
      </Link>
      <NavigationLogged  onClick={props.handleBurgerClick} onClose={props.closeBurger} handleBurgerClick={props.handleBurgerClick}/>
    </header>
  );
}

export default HeaderLogged;
