import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './MoviesCard.css';
import savedFilmBtn from '../../images/icons/saved-ico.svg';
import removeFilmBtn from '../../images/icons/remove-ico.svg';

const MoviesCard = ({ movie }) => {
  const location = useLocation();

  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  const [isVisible, setVisible] = useState(true);
  const handleRemove = () => {
    setVisible(!isVisible);
  };

  return (
    isVisible && (
      <li className="card">
        <div className="card__header">
          <p className="card__title">{movie.name}</p>
          <p className="card__duration">{`0ч ${movie.duration}м`}</p>
        </div>
        <img src={movie.img} className="card__image" alt="Обложка фильма" />
        {!isActive ? (
          <>
            <button
              onClick={location.pathname === '/saved-movies' ? handleRemove : handleClick}
              className="card__button"
            >
              {location.pathname === '/saved-movies' ? (
                <img src={removeFilmBtn} alt="Иконка удаления фильма" />
              ) : (
                'Сохранить'
              )}
            </button>
          </>
        ) : (
          <>
            <button onClick={handleClick} className="card__button card__button_active">
              <img src={savedFilmBtn} alt="Иконка сохраненного фильма" />
            </button>
          </>
        )}
      </li>
    )
  );
};

export default MoviesCard;
