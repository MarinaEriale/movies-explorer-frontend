import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__data">
        <h2 className="profile__title">Привет, Марина!</h2>
        <ul className="profile__container">
          <li className="profile__info">
            <p className="profile__text">Имя</p>
            <p className="profile__text">Марина</p>
          </li>
          <li className="profile__info">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">pochta@yandex.ru</p>
          </li>
        </ul>
        <button type="button" className="profile__edit">Редактировать</button>
        <button type="button" className="profile__exit">Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;
