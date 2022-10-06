import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";

function Movies(props) {
  return (
    <section className="movies__screen">
      <SearchForm handleInputChange={props.handleInputChange} handleFormSubmit={props.handleFormSubmit}/>
      <MoviesCardList moviesCards={props.moviesCards} />
      <BurgerMenuPopup />
    </section>
  );
}

export default Movies;
