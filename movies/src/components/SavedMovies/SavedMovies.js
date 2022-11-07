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

  const windowInnerWidth = document.documentElement.clientWidth;

  function handleChange() {
    setChecked(!checked);
  }

  const handleFormSubmit = (data) => {
    setSearchQuery(data);
    setIsLoading(true);
  };

  React.useEffect(() => {
    if (searchQuery.length !== 0 && !checked) {
      setIsLoading(false);
      // console.log("Новый поисковый запрос", searchQuery);

      const keyWord = searchQuery.movieName.toLowerCase();

      const keyWordMovies = props.savedMovies.filter((item) =>
        item.nameRU.toLowerCase().includes(keyWord)
      );

      setMovieCards(keyWordMovies);

      // localStorage.setItem("keyWordMovies", JSON.stringify(keyWordMovies));
    } else if (searchQuery.length !== 0 && checked) {
      setIsLoading(false);

      const keyWord = searchQuery.movieName.toLowerCase();
      const keyWordMovies = props.savedMovies.filter((item) =>
        item.nameRU.toLowerCase().includes(keyWord)
      );

      const shortKeyWordMovies = keyWordMovies.filter(
        (item) => item.duration <= 40
      );

      setMovieCards(shortKeyWordMovies);
    }
  }, [searchQuery, checked, props.savedCards]);

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
