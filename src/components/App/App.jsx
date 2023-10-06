import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Routes>
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
              <Header loggedIn={true} />
              <Profile path="profile" />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header loggedIn={true} />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header loggedIn={true} />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Register setLoggedIn={!loggedIn} />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Login setLoggedIn={!loggedIn} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
