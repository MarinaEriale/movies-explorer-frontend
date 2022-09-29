import React from "react";
import "./MoviesCard.css";

function MovieCard(props) {
  return (
    <div className="movieCard">
      <img
        className="movieCard__image"
        src={`https://api.nomoreparties.co${props.data.image.url}`}
        alt="Скриншот из фильма"
      />
      <div className="movieCard__info">
        <div className="movieCard__text-container">
          <h2 className="movieCard__text">{props.data.nameRU}</h2>
          <p className="movieCard__duration">{props.data.duration}</p>
        </div>
        <div className="movieCard__like">
          <button type="button" className="movieCard__like-button"></button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
