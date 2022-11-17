import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const [searchQuery, setSearchQuery] = useState([]);
  const [movieCards, setMovieCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);

  console.log(props.savedMovies);

  React.useEffect(() => {
    setMovieCards(props.savedMovies);
  }, [props.savedMovies])

  const windowInnerWidth = document.documentElement.clientWidth;

  console.log("Фильмы из стейта", movieCards);

  function handleChange() {
    setChecked(!checked);
  }

  const handleFormSubmit = (data) => {
    setSearchQuery(data);
    setIsLoading(true);
  };

  React.useEffect(() => {
    if (searchQuery.length !== 0 && !checked) {
      setTimeout(() => {
        setIsLoading(false);

        const cardsArray = JSON.parse(localStorage.getItem("savedMovies"));
        const keyWord = searchQuery.movieName.toLowerCase();

        const keyWordMovies = cardsArray.filter((item) =>
          item.nameRU.toLowerCase().includes(keyWord)
        );

        setMovieCards(keyWordMovies);
        console.log("Фильмы после поиска", keyWordMovies);
      }, 200);
    }
  }, [searchQuery, checked]);

  React.useEffect(() => {
    if (checked) {
      setTimeout(() => {
        setIsLoading(false);

        const cardsArray = JSON.parse(localStorage.getItem("savedMovies"));

        // const keyWord = searchQuery.movieName.toLowerCase();
        // const keyWordMovies = cardsArray.filter((item) =>
        //   item.nameRU.toLowerCase().includes(keyWord)
        // );

        const shortKeyWordMovies = cardsArray.filter(
          (item) => item.duration <= 40
        );

        setMovieCards(shortKeyWordMovies);
      });
    }
  }, [checked]);

  return (
    <section className="savedMovies">
      <SearchForm
        handleFormSubmit={handleFormSubmit}
        handleChange={handleChange}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        searchQuery.length !== 0 &&
        movieCards.length === 0 && (
          <p className="moviesNotFound">Ничего не найдено</p>
        )
      )}
      <MoviesCardList
        savedMovies={searchQuery.length !== 0 ? movieCards : props.savedMovies}
        windowInnerWidth={windowInnerWidth}
        onCardLike={props.onCardLike}
        onCardDislike={props.onCardDislike}
      />
    </section>
  );
}

export default SavedMovies;
