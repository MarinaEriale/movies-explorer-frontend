import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCardList(props) {
  const [moviesToMap, setMoviesToMap] = useState([]);
  const [elseContainerName, setElseContainerName] = useState([]);
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  const XLARGE_SCREEN = 1280;
  const LARGE_SCREEN = 1270;
  const MIDDLE_SCREEN = 990;
  const LITTLE_SCREEN = 760;
  const XLARGE_LINE = 4;
  const LARGE_LINE = 3;
  const MIDDLE_LINE = 2;
  const LITTLE_LINE = 1;

  const windowWidth = props.windowInnerWidth;
  // console.log(props);

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      const ownMovies = props.savedMovies.filter(
        (item) => item.owner === currentUser._id
      );
      setMoviesToMap(ownMovies);
      setElseContainerName("moviesCardList__else-container");
    } else if (location.pathname === "/movies") {
      const arrayLength = props.movieCards.length;
      if (arrayLength > XLARGE_LINE && windowWidth > LARGE_SCREEN) {
        setMoviesToMap(props.movieCards.slice(0, XLARGE_LINE * 4));
      } else if (arrayLength <= XLARGE_LINE && windowWidth > LARGE_SCREEN) {
        setMoviesToMap(props.movieCards);
      } else if (
        arrayLength > LARGE_LINE &&
        windowWidth <= LARGE_SCREEN &&
        windowWidth > MIDDLE_SCREEN
      ) {
        setMoviesToMap(props.movieCards.slice(0, LARGE_LINE * 4));
      } else if (
        arrayLength <= LARGE_LINE &&
        windowWidth <= LARGE_SCREEN &&
        windowWidth > MIDDLE_SCREEN
      ) {
        setMoviesToMap(props.movieCards);
      } else if (
        arrayLength > MIDDLE_LINE &&
        windowWidth <= MIDDLE_SCREEN &&
        windowWidth > LITTLE_SCREEN
      ) {
        setMoviesToMap(props.movieCards.slice(0, MIDDLE_LINE * 4));
      } else if (
        arrayLength <= MIDDLE_LINE &&
        windowWidth <= MIDDLE_SCREEN &&
        windowWidth > LITTLE_SCREEN
      ) {
        setMoviesToMap(props.movieCards);
      } else if (arrayLength > LITTLE_LINE && windowWidth <= LITTLE_SCREEN) {
        setMoviesToMap(props.movieCards.slice(0, LITTLE_LINE * 5));
      } else {
        setMoviesToMap(props.movieCards);
      }
      setElseContainerName(
        `moviesCardList__else-container ${
          props.movieCards.length - moviesToMap.length > 0
            ? "moviesCardList__else-container_active"
            : ""
        }`
      );
    }
  }, [props.movieCards, props.savedMovies]);

  function handleElseButtonClick() {
    if (windowWidth >= XLARGE_SCREEN) {
      setElseContainerName(
        `moviesCardList__else-container ${
          props.movieCards.length - (moviesToMap.length + XLARGE_LINE) > 0
            ? "moviesCardList__else-container_active"
            : ""
        }`
      );
      setMoviesToMap(
        props.movieCards.slice(0, moviesToMap.length + XLARGE_LINE)
      );
    } else if (windowWidth <= LARGE_SCREEN && windowWidth > MIDDLE_SCREEN) {
      setElseContainerName(
        `moviesCardList__else-container ${
          props.movieCards.length - (moviesToMap.length + LARGE_LINE) > 0
            ? "moviesCardList__else-container_active"
            : ""
        }`
      );
      setMoviesToMap(
        props.movieCards.slice(0, moviesToMap.length + LARGE_LINE)
      );
    } else if (windowWidth <= MIDDLE_SCREEN && windowWidth > LITTLE_SCREEN) {
      setElseContainerName(
        `moviesCardList__else-container ${
          props.movieCards.length - (moviesToMap.length + MIDDLE_LINE) > 0
            ? "moviesCardList__else-container_active"
            : ""
        }`
      );
      setMoviesToMap(
        props.movieCards.slice(0, moviesToMap.length + MIDDLE_LINE)
      );
    } else if (windowWidth <= LITTLE_SCREEN) {
      setElseContainerName(
        `moviesCardList__else-container ${
          props.movieCards.length - (moviesToMap.length + LITTLE_LINE) > 0
            ? "moviesCardList__else-container_active"
            : ""
        }`
      );
      setMoviesToMap(
        props.movieCards.slice(0, moviesToMap.length + LITTLE_LINE * 2)
      );
    }
  }

  return (
    <div className="moviesCardList">
      <div className="moviesCardList__list">
        {moviesToMap.map((item) => {
          return (
            <MovieCard
              key={item.id || props.movieId}
              data={item}
              onCardLike={props.onCardLike}
              onCardDislike={props.onCardDislike}
              savedMovies={props.savedMovies}
            />
          );
        })}
      </div>
      <div className={elseContainerName}>
        <button
          className="moviesCardList__else-button"
          onClick={handleElseButtonClick}
        >
          Ещё
        </button>
      </div>
    </div>
  );
}

export default MoviesCardList;
