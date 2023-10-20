import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

import {
  DESKTOP_DISPLAY,
  TABLET_DISPLAY,
  DESKTOP_CARDS,
  TABLET_CARDS,
  MOBILE_CARDS,
  DESKTOP_MORE,
  TABLET_MORE,
  MOBILE_MORE,
} from '../../utils/cardsConstants';

const MoviesCardList = ({
  isPreloaderActive,
  movies,
  savedMovies,
  onSaveMovie,
  onRemoveMovie,
  requestError,
  welcome,
}) => {
  const location = useLocation();

  const defaultMoviesToShow = () => {
    if (window.innerWidth > DESKTOP_DISPLAY) {
      return DESKTOP_CARDS;
    } else if (TABLET_DISPLAY <= window.innerWidth && window.innerWidth <= DESKTOP_DISPLAY) {
      return TABLET_CARDS;
    } else {
      return MOBILE_CARDS;
    }
  };
  const [showMore, setShowMore] = useState(defaultMoviesToShow);
  const currentMovies = movies.slice(0, showMore);

  const handleShowMore = () => {
    setShowMore(defaultMoviesToShow);
    if (window.innerWidth > DESKTOP_DISPLAY) {
      setShowMore(showMore + DESKTOP_MORE);
    } else if (TABLET_DISPLAY <= window.innerWidth && window.innerWidth <= DESKTOP_DISPLAY) {
      setShowMore(showMore + TABLET_MORE);
    } else {
      setShowMore(showMore + MOBILE_MORE);
    }
  };

  return isPreloaderActive ? (
    <Preloader />
  ) : (
    <section className="card-list">
      <ul className="card-list__block">
        {location.pathname === '/movies' && currentMovies.length !== 0 ? (
          currentMovies.map((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                movie={movie}
                savedMovies={savedMovies}
                onSaveMovie={onSaveMovie}
              />
            );
          })
        ) : movies.length !== 0 ? (
          movies.map((movie) => {
            return <MoviesCard key={movie._id} movie={movie} onRemoveMovie={onRemoveMovie} />;
          })
        ) : requestError ? (
          <span className="card-list__error">
            Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер
            недоступен. Подождите немного и попробуйте ещё раз
          </span>
        ) : welcome ? (
          <span className="card-list__error">Выполните поиск</span>
        ) : (
          <span className="card-list__error">Ничего не найдено</span>
        )}
      </ul>
      {location.pathname === '/movies' && (
        <button
          onClick={handleShowMore}
          type="button"
          className={`card-list__button ${showMore >= movies.length && 'card-list__button_hidden'}`}
        >
          Еще
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
