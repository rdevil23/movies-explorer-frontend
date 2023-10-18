import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import '../../index.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isCheckToken, setCheckToken] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([mainApi.getUserInfo(localStorage.jwt), mainApi.getMovies(localStorage.jwt)])
        .then(([user, movies]) => {
          setCurrentUser(user);
          setSavedMovies(movies.reverse());
          setLoggedIn(true);
          setCheckToken(false);
        })
        .catch((err) => {
          console.error(err);
          toast('Ошибка при загрузке начальных данных');
          setCheckToken(false);
        });
    } else {
      setLoggedIn(false);
      setCheckToken(false);
    }
  }, [loggedIn]);

  function handleLogin({ email, password }) {
    mainApi
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        navigate('/movies');
        toast('Вы успешно авторизовались!');
      })
      .catch((err) => {
        console.error(err);
        toast('Что-то пошло не так! Попробуйте еще раз.');
      });
  }

  function handleRegister({ username, email, password }) {
    mainApi
      .register(username, email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(false);
          handleLogin({ email, password });
        }
        toast('Регистрация прошла успешно!');
      })
      .catch((err) => {
        console.error(err);
        toast('Что-то пошло не так! Попробуйте еще раз.');
      });
  }

  function handleLogOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
  }

  function handleUpdateUser(user) {
    mainApi
      .updateUserInfo(user, localStorage.jwt)
      .then((userData) => {
        setCurrentUser(userData);
        toast('Данные успешно обновлены!');
      })
      .catch(console.error);
  }

  function handleRemoveMovie(delMovieId) {
    mainApi
      .removeMovieFromSaved(delMovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== delMovieId;
          })
        );
        toast('Фильм успешно удален');
      })
      .catch(console.error);
  }

  function handleSaveMovie(movie) {
    const isSaved = savedMovies.some((i) => movie.id === i.movieId);
    const savedFilm = savedMovies.filter((movies) => {
      return movies.movieId === movie.id;
    });
    if (isSaved) {
      handleRemoveMovie(savedFilm[0]._id);
    } else {
      mainApi
        .addMovieToSaved(movie, localStorage.jwt)
        .then((savedMovie) => {
          setSavedMovies([savedMovie, ...savedMovies]);
          toast('Фильм сохранен!');
        })
        .catch(console.error);
    }
  }

  return (
    <div className="app">
      {isCheckToken ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route
              path="/signin"
              element={
                loggedIn ? <Navigate to="/movies" replace /> : <Login onLogin={handleLogin} />
              }
            />

            <Route
              path="/signup"
              element={
                loggedIn ? (
                  <Navigate to="/movies" replace />
                ) : (
                  <Register onRegister={handleRegister} />
                )
              }
            />

            <Route path="*" element={<NotFound />} />

            <Route
              exact
              path="/"
              element={
                <>
                  <Header loggedIn={loggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />

            <Route
              path="/profile"
              element={
                <>
                  <Header loggedIn={loggedIn} />
                  <ProtectedRoute
                    element={Profile}
                    loggedIn={loggedIn}
                    onUpdateUser={handleUpdateUser}
                    onLogOut={handleLogOut}
                  />
                </>
              }
            />

            <Route
              path="/movies"
              element={
                <>
                  <Header loggedIn={loggedIn} />
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    onSaveMovie={handleSaveMovie}
                  />
                  <Footer />
                </>
              }
            />

            <Route
              path="/saved-movies"
              element={
                <>
                  <Header loggedIn={loggedIn} />
                  <ProtectedRoute
                    element={SavedMovies}
                    loggedIn={loggedIn}
                    savedMovies={savedMovies}
                    onRemoveMovie={handleRemoveMovie}
                  />
                  <Footer />
                </>
              }
            />
          </Routes>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
