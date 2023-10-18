import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

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
    if (window.innerWidth > 1279) {
      return 12;
    } else if (768 <= window.innerWidth && window.innerWidth <= 1279) {
      return 8;
    } else {
      return 5;
    }
  };
  const [showMore, setShowMore] = useState(defaultMoviesToShow);
  const currentMovies = movies.slice(0, showMore);

  const handleShowMore = () => {
    setShowMore(defaultMoviesToShow);
    if (window.innerWidth > 1279) {
      setShowMore(showMore + 3);
    } else if (768 <= window.innerWidth && window.innerWidth <= 1279) {
      setShowMore(showMore + 2);
    } else {
      setShowMore(showMore + 1);
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
