import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={headerLogo}
          alt="Зелёный круг с волнистыми краями"
          className="logo"
        />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
