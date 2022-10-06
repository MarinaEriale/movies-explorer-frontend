import React, { useState } from "react";
import "./SearchForm.css";
import magnifier from "../../images/icon.svg";
import toggle from "../../images/smalltumb.svg";

function SearchForm (props) {
  

  return (
    <form className="searchForm" onSubmit={props.handleFormSubmit}>
      <div className="searchForm__buttons">
        <label htmlFor="name">
          <img
            src={magnifier}
            alt="Изображение лупы"
            className="searchForm__magnifier"
          ></img>
        </label>
        <input
          id="searchPrhase"
          name="searchPrhase"
          type="text"
          placeholder="Фильм"
          className="searchForm__movie"
          required="required"
          onChange={props.handleInputChange}
        />
        <button type="submit" className="searchForm__button">
          <p className="searchForm__button-text">Найти</p>
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
