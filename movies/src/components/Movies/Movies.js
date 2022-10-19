import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


function Movies(props) {
  // console.log(props);

  return (
    <section className="movies__screen">
      <SearchForm />
      <MoviesCardList />
      
    </section>
  );
}

export default Movies;
