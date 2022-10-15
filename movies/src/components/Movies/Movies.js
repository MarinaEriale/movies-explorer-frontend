import React from "react";
import "./Movies.css";
import moviesApi from "../../utils/MoviesApi";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";

function Movies(props) {

  React.useEffect(() => {
    moviesApi
      .getMoviesCards()
      .then((data) => {
        localStorage.setItem("data", JSON.stringify(data));
      })
      .catch((err) => console.log("Ошибка", err));
  }, []);

  const loadedMovies = JSON.parse(localStorage.getItem("data"));

  console.log(loadedMovies);
  return (
    <section className="movies__screen">
      <SearchForm handleInputChange={props.handleInputChange} handleFormSubmit={props.handleFormSubmit}/>
      <MoviesCardList moviesCards={props.moviesCards} />
      <BurgerMenuPopup />
    </section>
  );
}

export default Movies;
