import React from "react";
import "./MoviesCardList.css";
import MovieCardSaved from "../MoviesCard/MoviesCardSaved";

function MoviesCardListSaved() {
  return (
    <div className="moviesCardList">
      <div className="moviesCardList__list">
        <MovieCardSaved />
        <MovieCardSaved />
        <MovieCardSaved />
      </div>
      <div className="moviesCardList__else-container">
        <button className="moviesCardList__else-button">Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardListSaved;