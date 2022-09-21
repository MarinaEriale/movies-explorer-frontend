import React from "react";
import "./Movies.css";
import HeaderLogged from "../Header/HeaderLogged";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";

function Movies() {
  return (
    <div className="movies__screen">
      <HeaderLogged />
      <SearchForm />
      <MoviesCardList />
      <Footer />
      <BurgerMenuPopup />
    </div>
  );
}

export default Movies;