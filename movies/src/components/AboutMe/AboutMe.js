import React from "react";
import "./AboutMe.css";
import photo from "../../images/photo.png";

function AboutMe() {
  return (
    <>
      <h2 className="aboutMe__title">Студент</h2>
      <div className="aboutMe__container">
        <img
          src={photo}
          alt="Фото автора проекта"
          className="aboutMe__photo"
        ></img>
        <div className="aboutMe__personal">
          <p className="aboutMe__name">Марина</p>
          <p className="aboutMe__prof">Фронтенд-разработчица, 41 год</p>
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
          <p className="aboutMe__sites-name">Статичный сайт</p>
          <p className="aboutMe__arrow">&#129125;</p>
        </li>
        <li className="aboutMe__sites">
          <p className="aboutMe__sites-name">Адаптивный сайт</p>
          <p className="aboutMe__arrow">&#129125;</p>
        </li>
        <li className="aboutMe__sites">
          <p className="aboutMe__sites-name">Одностраничное приложение</p>
          <p className="aboutMe__arrow">&#129125;</p>
        </li>
      </ul>
    </>
  );
}

export default AboutMe;
