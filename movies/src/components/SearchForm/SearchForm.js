import React from "react";
import "./SearchForm.css";
import magnifier from "../../images/icon.svg";
import toggle from "../../images/smalltumb.svg";

function SearchForm() {
  return (
    <form className="searchForm">
      <div className="searchForm__buttons">
        <label htmlFor="name">
          <img
            src={magnifier}
            alt="Изображение лупы"
            className="searchForm__magnifier"
          ></img>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Фильм"
          className="searchForm__movie"
          required="required"
        />
        <button type="submit" className="searchForm__button searchForm__button_inactive">
          <p className="searchForm__button-text searchForm__button-text_inactive">Найти</p>
        </button>
      </div>
      <div className="searchForm__checkbox">
        <img
          src={toggle}
          className="searchForm__checkbox-picture"
          alt="Значок чекбокса"
        ></img>
        <label htmlFor="short-film" className="searchForm__short-film">
          Короткометражки
          {/* <input type="checkbox" name="short-film" id="short-film" className="searchForm__checkbox"></input> */}
        </label>
      </div>
    </form>
  );
}

export default SearchForm;
