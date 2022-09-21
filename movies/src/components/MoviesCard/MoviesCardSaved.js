import React from "react";
import "./MoviesCard.css";
import movieScreen from "../../images/movie.png";

function MovieCardSaved() {
  return (
    <div className="movieCard">
      <img
        className="movieCard__image"
        src={movieScreen}
        alt="Скриншот из фильма"
      />
      <div className="movieCard__info">
        <div className="movieCard__text-container">
          <h2 className="movieCard__text">33 слова о дизайне</h2>
          <p className="movieCard__duration">1ч42м</p>
        </div>
        <div className="movieCard__like">
          <button type="button" className="movieCard__like-button movieCard__like-button_dislike">&#10006;</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCardSaved;