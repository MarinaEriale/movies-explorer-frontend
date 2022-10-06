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
import moviesApi from "../../utils/MoviesApi";
import { checkToken } from "../../utils/auth";
import Header from "../Header/Header";
import HeaderLogged from "../Header/HeaderLogged";
import Footer from "../Footer/Footer";

function App() {
  const [moviesCards, setMoviesCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const location = useLocation();
  const [searchQuery, setsearchQuery] = useState([]);

  React.useEffect(() => {
    moviesApi
      .getMoviesCards()
      .then((data) => {
        setMoviesCards(data);
        localStorage.setItem("data", JSON.stringify(data));
      })
      .catch((err) => console.log("Ошибка", err));
  }, []);

  const loadedMovies = JSON.parse(localStorage.getItem("data"));

  console.log(loadedMovies);

  const handleInputChange = (e) => {
    setsearchQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Сабмит сработал");
  };

  console.log(moviesCards);

  // moviesCards.filter((item) => {

  // })

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

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setName("");
    navigate("/login");
  };

  return (
    <div className="background">
      <div className="page">
        {location.pathname === "/" && (
          <Header onLogout={handleLogout} loggedIn={loggedIn} name={name} />
        )}
        {(location.pathname === "/movies" ||
          location.pathname === "/saved-movies" ||
          location.pathname === "/profile") && (
          <HeaderLogged
            onLogout={handleLogout}
            loggedIn={loggedIn}
            name={name}
          />
        )}
        <main>
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
                  moviesCards={moviesCards}
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
      </div>
    </div>
  );
}

export default App;
