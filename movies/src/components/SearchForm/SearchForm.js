import React from "react";
import "./SearchForm.css";
import magnifier from "../../images/icon.svg";
import { useForm } from "react-hook-form";
import Switch from "../Switch/Switch";

function SearchForm(props) {

  const {
    register,
    handleSubmit,
    formState: { errors }
    // reset,
  } = useForm({
    mode: "onChange",
  });

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
          {...register("movieName", { required: "Нужно ввести ключевое слово" })}
          type="text"
          placeholder="Фильм"
          defaultValue={props.value || ""}
          className="searchForm__movie"
        />
        
        <button
          type="submit"
          className="searchForm__button"
          // disabled={!isValid}
        >
          <p className="searchForm__button-text">Найти</p>
        </button>
      </div>
      <div className="searchForm__error">
          {errors?.movieName && <p>{errors?.movieName?.message || "Ошибка"}</p>}
        </div>
      <div className="searchForm__checkbox">
        <Switch handleChange={props.handleChange} checked={props.checked}/>
        <p className="searchForm__short-film">Короткометражки</p>
      </div>
      
    </form>
  );
}

export default SearchForm;
