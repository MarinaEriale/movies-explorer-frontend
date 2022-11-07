import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MovieCard(props) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  // console.log("MovieId карточки", props.data.id);
  // console.log("Массив сохраненных фильмов", props.savedMovies)
  // console.log(props.savedMovies.find((item) => item.MovieId === props.data.id ));

  React.useEffect(() => {
    if (location.pathname === "/saved-movies") {
      setIsLiked(true);
      // console.log("Это страница сохраненных фильмов, true", isLiked);
    }
  }, []);

  const currentUser = React.useContext(CurrentUserContext);

  // React.useEffect(() => {
  //   if (props.savedMovies.find((item) => item.MovieId === props.data.movieId)) {
  //     setIsLiked(isLiked);

  //     console.log("Карточка лайкнута", isLiked)
  //   }
  // },[props.data.movies])

  function handleLikeClick() {
    //если не лайкт, то вызывать функцию сохранения, если лайкт, вызывать функцию удаления
    if (!isLiked) {
      setIsLiked(!isLiked);
      props.onCardLike(props.data);
    } else if (isLiked) {
      setIsLiked(!isLiked);
      props.onCardDislike(props.data);
    }
  }

  const likeButtonName = `movieCard__like-button ${
    isLiked ? "movieCard__like-button_dislike" : ""
  }`;

  const likeButtonText = isLiked ? "✖" : "";

  return (
    <div className="movieCard">
      <a
        href={props.data.trailerLink}
        target="_blank"
        rel="noreferrer"
        className="aboutMe__site-link"
      >
        <img
          className="movieCard__image"
          src={
            location.pathname === "/saved-movies"
              ? props.data.image
              : `https://api.nomoreparties.co${props.data.image.url}`
          }
          alt="Скриншот из фильма"
        />
      </a>

      <div className="movieCard__info">
        <div className="movieCard__text-container">
          <h2 className="movieCard__text">{props.data.nameRU}</h2>
          <p className="movieCard__duration">{props.data.duration}</p>
        </div>
        <div className="movieCard__like">
          <button
            type="button"
            className={likeButtonName}
            onClick={handleLikeClick}
          >
            {likeButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
