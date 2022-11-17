import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MovieCard(props) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  // console.log("MovieId карточки", props.data.movieId || props.data.id);
  // console.log("Массив сохраненных фильмов", props.savedMovies)
  // console.log(props.savedMovies.find((item) => item.MovieId === props.data.id ));

  React.useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("savedMovies"));
    // console.log(savedCards);

    const likedCard = savedCards.find(
      (item) => item.movieId === (props.data.movieId || props.data.id)
    );
    // console.log("Лайкнутая карточка", likedCard);
    likedCard ? setIsLiked(true) : setIsLiked(false);
  }, [props.data.id, props.data.movieId]);

  // console.log(isLiked);

  // const currentUser = React.useContext(CurrentUserContext);

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

  const greenPointName = `movieCard__green-point ${
    isLiked ? "movieCard__green-point_dislike" : ""
  }`;

  // const likeButtonText = isLiked ? "✖" : "";

  function calculateDuration() {
    const hours = Math.floor(props.data.duration / 60);
    const minutes = props.data.duration % 60;
    return hours + "ч" + minutes + "м";
  }

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
          <p className="movieCard__duration">
            {calculateDuration(props.data.duration)}
          </p>
        </div>
        <div className="movieCard__like">
          <button
            type="button"
            // className={likeButtonName}
            className="movieCard__like-button"
            onClick={handleLikeClick}
          >
            {/* {likeButtonText} */}
            {location.pathname === "/movies" && (
              <div className={greenPointName}></div>
            )}
            {location.pathname === "/saved-movies" && (
              <p className="movieCard__cross">✖</p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
