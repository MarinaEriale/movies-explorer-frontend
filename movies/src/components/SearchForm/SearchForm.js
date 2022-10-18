import React, { useState } from "react";
import "./SearchForm.css";
import magnifier from "../../images/icon.svg";
import toggle from "../../images/smalltumb.svg";
import { useForm } from "react-hook-form";

function SearchForm() {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange"
  });

  // const buttonClassName = `searchForm__button ${
  //   (!isValid) ? "searchForm__button_inactive" : ""
  // }`;

  // const buttonTextClassName = `searchForm__button-text ${
  //   (!isValid) ? "searchForm__button-text_inactive" : ""
  // }`;



  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="searchForm">
      <div className="searchForm__buttons">
        <label htmlFor="name">
          <img
            src={magnifier}
            alt="Изображение лупы"
            className="searchForm__magnifier"
          ></img>
        </label>
        <input
          {...register("name", { required: true })}
          id="name"
          type="text"
          placeholder="Фильм"
          className="searchForm__movie"
          required="required"
          // onChange={props.handleInputChange}
        />
        <button
          type="submit"
          className="searchForm__button"
          // disabled={!isValid}
        >
          <p className="searchForm__button-text">
            Найти
          </p>
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
