import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";

function Movies(props) {
  console.log(props);

  return (
    <section className="movies__screen">
      <SearchForm />
      <MoviesCardList />
      <BurgerMenuPopup isBurgerOpened={props.isBurgerOpened} onClose={props.onClose} handleBurgerClick={props.handleBurgerClick}/>
    </section>
  );
}

export default Movies;
