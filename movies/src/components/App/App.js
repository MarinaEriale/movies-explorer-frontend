import React, {useState} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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

function App() {
  const location = useLocation();  
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
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
          location.pathname === "/profile") && <HeaderLogged isOpen={isBurgerOpened} onClose={closeBurger} handleBurgerClick={handleBurgerClick}/>}
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/movies" element={<Movies isBurgerOpened={isBurgerOpened} onClose={closeBurger} handleBurgerClick={handleBurgerClick}/>} />
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
