import { useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import '../Movies/Movies.css';

const SavedMovies = () => {
  const filmName = 'В погоне за Бенкси';
  const duration = 42;

  const movies = [
    { id: 1, name: filmName, duration: duration, img: require('../../images/movies/movie1.jpg') },
    { id: 2, name: filmName, duration: duration, img: require('../../images/movies/movie2.jpg') },
    { id: 3, name: filmName, duration: duration, img: require('../../images/movies/movie3.jpg') },
  ];

  const [isActive, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 1000);
  }, []);

  return (
    <main className="movies">
      <SearchForm />
      {isActive ? <Preloader /> : <MoviesCardList movies={movies} />}
    </main>
  );
};

export default SavedMovies;
