import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';
import movieApi from '../../utils/MoviesApi';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import SearchInput from '../SearchForm/SearchInput/SearchInput';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function Movies({ savedMovies, onSaveMovie }) {
  const [searchValue, setSearchValue] = useLocalStorage('searchValue', '');
  const [isShowShort, setShowShort] = useLocalStorage('isShowShort', false);
  const [requestError, setRequestError] = useState(false);
  const [welcome, setWelcome] = useState(true);

  const {
    register,
    handleSubmit,
    checked,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  function onSubmit() {
    handleSearch({ searchValue, isShowShort });
  }

  const [searchResult, setSearchResult] = useLocalStorage('searchResult', []);
  const [requestResult, setRequestResult] = useLocalStorage('requestResult', []);
  const [isPreloaderActive, setPreloaderActive] = useState(false);

  const filter = (searchValue, movies, isShowShort) => {
    localStorage.setItem('requestResult', JSON.stringify(movies));
    setSearchResult(
      movies.filter((movie) => {
        const film =
          searchValue &&
          movie &&
          movie.nameRU &&
          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
        const shortFilm = movie.duration <= 40;
        return isShowShort ? film && shortFilm : film;
      })
    );
  };

  useEffect(() => {
    isShowShort
      ? filter(searchValue, requestResult, true)
      : filter(searchValue, requestResult, false);
  }, [isShowShort]);

  function handleSearch({ searchValue, isShowShort }) {
    if (requestResult.length === 0) {
      setPreloaderActive(true);
      movieApi
        .getMovies()
        .then((movies) => {
          setRequestError(false);
          setRequestResult(movies);
          setWelcome(false);
          filter(searchValue, movies, isShowShort);
        })
        .catch((err) => {
          console.log(err);
          setRequestError(true);
        })
        .finally(() => setPreloaderActive(false));
    } else {
      filter(searchValue, requestResult, isShowShort);
    }
  }

  return (
    <main className="movies">
      <SearchForm onSubmit={handleSubmit(onSubmit)} isValid={isValid} checked={checked}>
        <SearchInput
          className={`search__input  ${errors.searchValue ? 'search__input_invalid' : ''}`}
          type="text"
          name="searchValue"
          placeholder="Фильм"
          value={searchValue || ''}
          register={{
            ...register('searchValue', {
              onChange: (e) => {
                setSearchValue(e.target.value);
              },
              required: 'Поле должно быть заполнено',
              maxLength: {
                value: 30,
                message: 'Максимальная длина 30 символов',
              },
            }),
          }}
          error={errors.searchValue}
        />
        <FilterCheckbox
          className="checkbox__input"
          type="checkbox"
          name="checkbox"
          checked={isShowShort || false}
          register={{
            ...register('checkbox', {
              onChange: (e) => {
                setShowShort(e.target.checked);
              },
            }),
          }}
        />
      </SearchForm>

      <MoviesCardList
        movies={searchResult}
        isPreloaderActive={isPreloaderActive}
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
        requestError={requestError}
        welcome={welcome}
      />
    </main>
  );
}

export default Movies;
