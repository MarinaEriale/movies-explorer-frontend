import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import moviesApi from "../../utils/MoviesApi";

function App() {
  const [moviesCards, setMoviesCards] = useState([]);

  React.useEffect(() => {
    moviesApi
      .getMoviesCards()
      .then((data) => setMoviesCards(data))
      .catch((err) => console.log("Ошибка", err));
  }, []);

  console.log(moviesCards);

  return (
    <div className="background">
      <div className="page">
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/movies"
            element={<Movies moviesCards={moviesCards}  />}
          />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
