import { useEffect, useState } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import './Movies.css';

const Movies = () => {
  const filmName = 'В погоне за Бенкси';
  const duration = 42;

  const movies = [
    { id: 1, name: filmName, duration: duration, img: require('../../images/movies/movie1.jpg') },
    { id: 2, name: filmName, duration: duration, img: require('../../images/movies/movie2.jpg') },
    { id: 3, name: filmName, duration: duration, img: require('../../images/movies/movie3.jpg') },
    { id: 4, name: filmName, duration: duration, img: require('../../images/movies/movie4.jpg') },
    { id: 5, name: filmName, duration: duration, img: require('../../images/movies/movie5.jpg') },
    { id: 6, name: filmName, duration: duration, img: require('../../images/movies/movie6.jpg') },
    { id: 7, name: filmName, duration: duration, img: require('../../images/movies/movie7.jpg') },
    { id: 8, name: filmName, duration: duration, img: require('../../images/movies/movie8.jpg') },
    { id: 9, name: filmName, duration: duration, img: require('../../images/movies/movie9.jpg') },
    { id: 10, name: filmName, duration: duration, img: require('../../images/movies/movie10.jpg') },
    { id: 11, name: filmName, duration: duration, img: require('../../images/movies/movie11.jpg') },
    { id: 12, name: filmName, duration: duration, img: require('../../images/movies/movie12.jpg') },
    { id: 13, name: filmName, duration: duration, img: require('../../images/movies/movie13.jpg') },
    { id: 14, name: filmName, duration: duration, img: require('../../images/movies/movie14.jpg') },
    { id: 15, name: filmName, duration: duration, img: require('../../images/movies/movie15.jpg') },
    { id: 16, name: filmName, duration: duration, img: require('../../images/movies/movie16.jpg') },
    { id: 17, name: filmName, duration: duration, img: require('../../images/movies/movie17.jpg') },
  ];

  const [isActive, setActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActive(false);
    }, 1000);
  }, []);

  return (
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
      {isActive ? <Preloader /> : <MoviesCardList movies={movies} />}
    </section>
  );
};

export default Movies;
