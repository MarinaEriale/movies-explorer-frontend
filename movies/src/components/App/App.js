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

function App() {
  const location = useLocation();
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  // const [moviesCards, setMoviesCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [searchQuery, setsearchQuery] = useState([]);

  const handleInputChange = (e) => {
    setsearchQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Сабмит сработал");
  };

  React.useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      checkToken(jwt).then((res) => {
        if (res) {
          setLoggedIn(true);
          setName(res.name);
          navigate("/movies");
        }
      });
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
    handleTokenCheck();
  };

  // const handleLogout = (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem("jwt");
  //   setLoggedIn(false);
  //   setName("");
  //   navigate("/login");
  // };

  // console.log(isBurgerOpened);

  function handleBurgerClick() {
    setIsBurgerOpened(true);
  }

  function closeBurger() {
    setIsBurgerOpened(false);
  }

  return (
    <div className="background">
      <div className="page">
        {location.pathname === "/" && <Header />}
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
                <Movies
                  isBurgerOpened={isBurgerOpened}
                  onClose={closeBurger}
                  handleBurgerClick={handleBurgerClick}
                  handleInputChange={handleInputChange}
                  handleFormSubmit={handleFormSubmit}
                />
              }
            />

            <Route path="/saved-movies" element={<SavedMovies />} />
            <Route path="/profile" element={<Profile />} />
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
  );
}

export default App;
