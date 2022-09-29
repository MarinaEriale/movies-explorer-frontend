import React from "react";
import "./MoviesCardList.css";
import MovieCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <div className="moviesCardList">
      <div className="moviesCardList__list">
        {props.moviesCards.map((item) => {
          return <MovieCard key={item.id} data={item} />;
        })}
      </div>
      <div className="moviesCardList__else-container">
        <button className="moviesCardList__else-button">Ещё</button>
      </div>
    </div>
  );
}

export default MoviesCardList;
