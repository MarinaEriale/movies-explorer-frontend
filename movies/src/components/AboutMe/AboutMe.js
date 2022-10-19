import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo.png";
// import arrow from "../../images/arrow.svg";

function AboutMe() {
  return (
    <section className="aboutMe">
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <img src={photo} alt="Фото автора проекта" className="aboutMe__photo" />
        <div className="aboutMe__personal">
          <p className="aboutMe__name">Марина</p>
          <p className="aboutMe__prof">Фронтенд-разработчица</p>
          <p className="aboutMe__biography">
            Родилась и живу в Ярославле, по первому образованию экономист. Моя
            семья это мои двое детей и два кота. Начала обучение веб-разработке
            в прошлом году из-за нехватки знаний для работы, но обучение меня
            настолько увлекло, что теперь я связываю свое будущее с полученной
            специальностью.
          </p>
          <a
            href="https://github.com/MarinaEriale"
            target="_blank"
            rel="noreferrer"
            className="aboutMe__link"
          >
            Github
          </a>
        </div>
      </div>
      <p className="aboutMe__portfolio">Портфолио</p>
      <ul className="aboutMe__site-list">
        <li className="aboutMe__sites">
          <a
            href="https://marinaeriale.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
            className="aboutMe__site-link"
          >
            <p className="aboutMe__sites-name">Статичный сайт</p>
            <p className="aboutMe__arrow">↗</p>
            {/* <img src={arrow} alt="Черная стрелка, указывающая на северо-восток" className="aboutMe__arrow"/> */}
          </a>
        </li>
        <li className="aboutMe__sites">
          <a
            href="https://marinaeriale.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
            className="aboutMe__site-link"
          >
            <p className="aboutMe__sites-name">Адаптивный сайт</p>
            <p className="aboutMe__arrow">↗</p>
            {/* <img src={arrow} alt="Черная стрелка, указывающая на северо-восток" className="aboutMe__arrow"/> */}
          </a>
        </li>
        <li className="aboutMe__sites">
          <a
            href="https://marina.place.nomoredomains.sbs/"
            target="_blank"
            rel="noreferrer"
            className="aboutMe__site-link"
          >
            <p className="aboutMe__sites-name">Одностраничное приложение</p>
            <p className="aboutMe__arrow">↗</p>
            {/* <img src={arrow} alt="Черная стрелка, указывающая на северо-восток" className="aboutMe__arrow"/> */}
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
