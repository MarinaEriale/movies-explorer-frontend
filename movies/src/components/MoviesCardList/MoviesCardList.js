import React from "react";
import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <div className="moviesCardList">
      <div className="moviesCardList__list">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
      <div className="moviesCardList__else-container">
        <button className="moviesCardList__else-button">Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;
