import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs__background">
      <h2 className="techs__title">Технологии</h2>
      <p className="techs__quantity">7 технологий</p>
      <p className="techs__diploma">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__container">
        <li className="tech__points">HTML</li>
        <li className="tech__points">CSS</li>
        <li className="tech__points">JS</li>
        <li className="tech__points">React</li>
        <li className="tech__points">Git</li>
        <li className="tech__points">Express.js</li>
        <li className="tech__points">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
