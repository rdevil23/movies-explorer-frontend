import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './MoviesCard.css';
import savedFilmBtn from '../../images/icons/saved-ico.svg';
import removeFilmBtn from '../../images/icons/remove-ico.svg';

const MoviesCard = ({ movie, savedMovies, onSaveMovie, onRemoveMovie }) => {
  const location = useLocation();

  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (location.pathname === '/movies') {
      setActive(savedMovies.some((i) => movie.id === i.movieId));
    }
  }, [savedMovies, movie.id, setActive, location]);

  function onClick() {
    if (savedMovies.some((i) => movie.id === i.movieId)) {
      setActive(true);
      onSaveMovie(movie);
    } else {
      setActive(false);
      onSaveMovie(movie);
    }
  }

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__title">{movie.nameRU}</h2>
        <p className="card__duration">{`${Math.trunc(movie.duration / 60)}ч ${
          movie.duration % 60
        }м`}</p>
      </div>
      <Link to={movie.trailerLink} target="_blank">
        <img
          src={
            location.pathname === '/movies'
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          className="card__image"
          alt={`Обложка фильма ${movie.name}`}
        />
      </Link>
      {location.pathname === '/movies' ? (
        <>
          <button
            type="button"
            className={`card__button ${isActive ? 'card__button_active' : ''}`}
            onClick={onClick}
          >
            {isActive ? <img src={savedFilmBtn} alt="Иконка сохраненного фильма" /> : 'Сохранить'}
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => onRemoveMovie(movie._id)}
            type="button"
            className={`card__button ${isActive ? 'card__button_active' : ''}`}
          >
            {location.pathname === '/saved-movies' ? (
              <img src={removeFilmBtn} alt="Иконка удаления фильма" />
            ) : (
              'Сохранить'
            )}
          </button>
        </>
      )}
    </li>
  );
};

export default MoviesCard;
