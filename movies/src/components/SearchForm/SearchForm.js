import React, { useState } from "react";
import "./SearchForm.css";
import magnifier from "../../images/icon.svg";
import { useForm } from "react-hook-form";
import Switch from "../Switch/Switch";

function SearchForm(props) {
  const [movie, setMovie] = useState('');

  const {
    register,
    handleSubmit,
    // reset,
  } = useForm({
    mode: "onChange",
  });

  // console.log(props.handleFormSubmit);

  // const buttonClassName = `searchForm__button ${
  //   (!isValid) ? "searchForm__button_inactive" : ""
  // }`;

  // const buttonTextClassName = `searchForm__button-text ${
  //   (!isValid) ? "searchForm__button-text_inactive" : ""
  // }`;

  // const onSubmit = (data, props) => {
  //   props.handleFormSubmit(data);
  //   console.log(data);
  //   reset();
  // };

  return (
    <form
      onSubmit={handleSubmit(props.handleFormSubmit)}
      className="searchForm"
    >
      <div className="searchForm__buttons">
        <label htmlFor="movieName">
          <img
            src={magnifier}
            alt="Изображение лупы"
            className="searchForm__magnifier"
          ></img>
        </label>
        <input
          {...register("movieName", { required: true })}
          type="text"
          placeholder="Фильм"
          defaultValue={props.value || ""}
          className="searchForm__movie"
          required="required"
          // onChange={props.handleInputChange}
        />
        <button
          type="submit"
          className="searchForm__button"
          // disabled={!isValid}
        >
          <p className="searchForm__button-text">Найти</p>
        </button>
      </div>
      <div className="searchForm__checkbox">
        <Switch handleChange={props.handleChange} />
        <p className="searchForm__short-film">Короткометражки</p>
      </div>
    </form>
  );
}

export default SearchForm;
