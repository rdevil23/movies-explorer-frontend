import { useState } from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies }) => {
  const defaultMoviesToShow = 12;
  const [showMore, setShowMore] = useState(defaultMoviesToShow);

  const handleShowMore = () => {
    if (window.innerWidth > 1279) {
      setShowMore(showMore + 3);
    } else if (768 <= window.innerWidth && window.innerWidth <= 1279) {
      setShowMore(showMore + 2);
    } else {
      setShowMore(showMore + 1);
    }
  };

  const handleShowDefault = () => {
    setShowMore(defaultMoviesToShow);
  };

  return (
    <section className="card-list">
      <ul className="card-list-block">
        {movies.slice(0, showMore).map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
      {showMore >= movies.length ? (
        <button
          onClick={handleShowDefault}
          className={`card-list__button ${
            movies.length <= defaultMoviesToShow && 'card-list__button_hidden'
          }`}
        >
          Свернуть
        </button>
      ) : (
        <button onClick={handleShowMore} className="card-list__button">
          Еще
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
