import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const [searchQuery, setSearchQuery] = useState([]);
  const [movieCards, setMovieCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState([]);
  const [oldSearch, setOldSearch] = useState(false);
  // const [oldCheckbox, setOldCheckbox] = useState(false);

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("keyWordMovies"))) {
      setOldSearch(true);
    }
  }, []);

  // console.log(!oldSearch);

  console.log(checked);

  const windowInnerWidth = document.documentElement.clientWidth;

  // React.useEffect(() => {
  //   console.log(movieCards);
  // }, [movieCards]);

  // const handleInputChange = (e) => {
  //   setsearchQuery(e.target.value);
  // };

  function handleChange() {
    setChecked(!checked);
  }

  const handleFormSubmit = (data) => {
    setSearchQuery(data);
    setIsLoading(true);
  };

  // console.log("searchQuery", searchQuery);

  React.useEffect(() => {
    if (searchQuery.length !== 0 && !checked) {
      setIsLoading(false);
      localStorage.setItem("searchQuery", JSON.stringify(searchQuery));
      localStorage.setItem("checked", JSON.stringify(checked));

      // console.log("Новый поисковый запрос", searchQuery);
      const cardsArray = JSON.parse(localStorage.getItem("data"));

      const keyWord = searchQuery.movieName.toLowerCase();

      const keyWordMovies = cardsArray.filter((item) =>
        item.nameRU.toLowerCase().includes(keyWord)
      );

      setMovieCards(keyWordMovies);

      localStorage.setItem("keyWordMovies", JSON.stringify(keyWordMovies));
    }
  }, [searchQuery, checked]);

  React.useEffect(() => {
    if (searchQuery.length !== 0 && checked) {
      setIsLoading(false);
      // localStorage.setItem("searchQuery", JSON.stringify(searchQuery));
      localStorage.setItem("checked", JSON.stringify(checked));

      const cardsArray = JSON.parse(localStorage.getItem("data"));

      const keyWord = searchQuery.movieName.toLowerCase();
      const keyWordMovies = cardsArray.filter((item) =>
        item.nameRU.toLowerCase().includes(keyWord)
      );

      const shortKeyWordMovies = keyWordMovies.filter(
        (item) => item.duration <= 40
      );

      setMovieCards(shortKeyWordMovies);
      localStorage.setItem("keyWordMovies", JSON.stringify(shortKeyWordMovies));
    }
  }, [searchQuery, checked]);

  
  // console.log(recentCheckboxState);  

  // React.useEffect(() => {
  //   const recentCheckboxState = JSON.parse(localStorage.getItem("checked"));
  //   if (oldSearch && recentCheckboxState) {
      
  //     // console.log("Текущий стейт чекбокса", recentCheckboxState);
  //     setChecked(recentCheckboxState);
  //   }
  // }, [oldSearch]);

  React.useEffect(() => {
    if (oldSearch) {
      const recentMovies = JSON.parse(localStorage.getItem("keyWordMovies"));
      const recentKeyWord = JSON.parse(localStorage.getItem("searchQuery"));
      setValue(recentKeyWord.movieName);
      // console.log(value);

      setMovieCards(recentMovies);
    }
  }, [oldSearch, value, checked]);

  // console.log(movieCards);

  return (
    <section className="movies__screen">
      <SearchForm
        handleFormSubmit={handleFormSubmit}
        handleChange={handleChange}
        value={value}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        searchQuery.length !== 0 &&
        movieCards.length === 0 && (
          <p className="moviesNotFound">Ничего не найдено</p>
        )
      )}
      {movieCards.length !== 0 && (
        <MoviesCardList
          movieCards={movieCards}
          windowInnerWidth={windowInnerWidth}
          onCardLike={props.onCardLike}
          onCardDislike={props.onCardDislike}
          savedMovies={props.savedMovies}
        />
      )}
    </section>
  );
}

export default Movies;
