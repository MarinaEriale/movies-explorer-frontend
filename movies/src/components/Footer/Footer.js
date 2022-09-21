import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__data">
        <p className="footer__copyright">&#169; 2022</p>
        <ul className="footer__links">
          <li className="footer__link">Яндекс.Практикум</li>
          <li className="footer__link">Github</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
