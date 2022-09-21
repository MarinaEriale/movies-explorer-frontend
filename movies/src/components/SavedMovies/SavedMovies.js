import React from "react";
import HeaderLogged from "../Header/HeaderLogged";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardListSaved from "../MoviesCardList/MoviesCardListSaved";
import Footer from "../Footer/Footer";


function SavedMovies () {
    return (
        <>
          <HeaderLogged />
          <SearchForm />
          <MoviesCardListSaved />
          <Footer />
        </>
      );
}

export default SavedMovies;