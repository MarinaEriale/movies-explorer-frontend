import React from "react";
import HeaderLogged from "../Header/HeaderLogged";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardListSaved from "../MoviesCardList/MoviesCardListSaved";
import Footer from "../Footer/Footer";


function SavedMovies () {
    return (
        <section className="savedMovies">
          <HeaderLogged />
          <SearchForm />
          <MoviesCardListSaved />
          <Footer />
        </section>
      );
}

export default SavedMovies;