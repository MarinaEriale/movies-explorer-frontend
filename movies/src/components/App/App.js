import React, { useState } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderLogged from "../Header/HeaderLogged";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";
import { checkToken } from "../../utils/auth";
import RequireAuth from "../RequireAuth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import api from "../../utils/Api";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const location = useLocation();
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  // const [moviesCards, setMoviesCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovieCards, setSavedMovieCards] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
 const [editSuccess, setEditSuccess] = useState(false);

  React.useEffect(() => {
    if (!JSON.parse(localStorage.getItem("data"))) {
      moviesApi
        .getMoviesCards()
        .then((foundMovies) => {
          // console.log(foundMovies);
          localStorage.setItem("data", JSON.stringify(foundMovies));
        })
        .catch((err) => console.log("Ошибка", err));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (localStorage.getItem("jwt") && loggedIn) {
      api
        .getSavedMovies()
        .then((movies) => {
          const ownMovies = movies.data.filter((item) => item.owner === currentUser._id)
         
          console.log(ownMovies)
          setSavedMovies(ownMovies);
          localStorage.setItem("savedMovies", JSON.stringify(ownMovies));
        })
        .catch((err) => console.log("Ошибка", err));
    }
  }, [savedMovieCards, loggedIn, currentUser._id]); //savedMovies

  // console.log(savedMovies);

  // const handleInputChange = (e) => {
  //   setsearchQuery(e.target.value);
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Сабмит сработал");
  // };

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate("/movies");
        }
      });
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
    handleTokenCheck();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  };

  // console.log(isBurgerOpened);

  function handleBurgerClick() {
    setIsBurgerOpened(true);
  }

  function closeBurger() {
    setIsBurgerOpened(false);
  }

  React.useEffect(() => {
    if (localStorage.getItem("jwt") && loggedIn) {
      api
        .getUserInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => console.log("Ошибка", err));
    }
  }, [loggedIn]);

  function handleCardSave(data) {
    api
      .addNewMovie(data)
      .then((newCard) => {
        setSavedMovieCards([newCard, ...savedMovieCards]);
      })
      .catch((err) => console.log("Ошибка", err));
  }

  function handleCardDelete(movie) {
    console.log(movie);
    console.log("Сохраненные фильмы", savedMovies);
    const clickedMovie = savedMovies.find(
      (item) => item.movieId === (movie.movieId || movie.id)
    );
    console.log("Кликнутый фильм", clickedMovie);
    console.log("clickedMovie._id", clickedMovie._id);
    api
      .deleteMovie(clickedMovie._id)
      .then(() => {
        setSavedMovieCards(
          savedMovies.filter((item) => item._id !== clickedMovie._id)
        );
      })
      .catch((err) => console.log("Ошибка", err));
  }

  function handleProfileUpdate(data) {
    api
      .editUserInfo(data)
      .then((userData) => {
        setCurrentUser(userData);
        setEditSuccess(true);
      })
      .catch((err) => console.log("Ошибка", err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="background">
        <div className="page">
          {loggedIn ? location.pathname === "/" && <HeaderLogged /> : location.pathname === "/" && <Header />}
          {(location.pathname === "/movies" ||
            location.pathname === "/saved-movies" ||
            location.pathname === "/profile") && (
            <HeaderLogged
              isOpen={isBurgerOpened}
              onClose={closeBurger}
              handleBurgerClick={handleBurgerClick}
            />
          )}
          <main className="main">
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route
                path="/signup"
                element={<Register onLogin={handleLogin} />}
              />
              <Route path="/signin" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/movies"
                element={
                  <RequireAuth loggedIn={loggedIn}>
                    <Movies
                      isBurgerOpened={isBurgerOpened}
                      onClose={closeBurger}
                      handleBurgerClick={handleBurgerClick}
                      onCardLike={handleCardSave}
                      onCardDislike={handleCardDelete}
                      savedMovies={savedMovies}
                    />
                  </RequireAuth>
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <RequireAuth loggedIn={loggedIn}>
                    <SavedMovies
                      savedMovies={savedMovies}
                      onCardLike={handleCardSave}
                      onCardDislike={handleCardDelete}
                    />
                  </RequireAuth>
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    onLogout={handleLogout}
                    handleProfileUpdate={handleProfileUpdate}
                    editSuccess={editSuccess}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          {(location.pathname === "/movies" ||
            location.pathname === "/saved-movies" ||
            location.pathname === "/") && <Footer />}
          <BurgerMenuPopup
            isBurgerOpened={isBurgerOpened}
            onClose={closeBurger}
            handleBurgerClick={handleBurgerClick}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
