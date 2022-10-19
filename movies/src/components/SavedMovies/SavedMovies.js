import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardListSaved from "../MoviesCardList/MoviesCardListSaved";


function SavedMovies () {
    return (
        <section className="savedMovies">
          <SearchForm />
          <MoviesCardListSaved />
        </section>
      );
}

export default SavedMovies;