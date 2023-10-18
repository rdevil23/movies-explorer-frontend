import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import '../Movies/Movies.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import SearchInput from '../SearchForm/SearchInput/SearchInput';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SavedMovies({ savedMovies, onRemoveMovie }) {
  const [searchSaved, setSearchSaved] = useLocalStorage('searchSaved', '');
  const [isShortSaved, setShortSaved] = useLocalStorage('isShortSaved', false);
  const [welcome, setWelcome] = useState(true);

  const [searchResult, setSearchResult] = useState(savedMovies);

  const {
    register,
    handleSubmit,
    checked,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  function onSubmit() {
    handleSearch({ searchSaved, isShortSaved });
  }

  const filter = (searchSaved, isShortSaved, movies) => {
    setSearchResult(
      movies.filter((movie) => {
        const film =
          searchSaved && movie && movie.nameRU && movie.nameRU.toLowerCase().includes(searchSaved);
        const shortFilm = movie.duration < 40;
        return isShortSaved ? film && shortFilm : film;
      })
    );
  };

  function handleSearch({ searchSaved, isShortSaved }) {
    setWelcome(false);
    filter(searchSaved, isShortSaved, savedMovies);
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setSearchSaved('');
      setShortSaved(false);
    }
    setSearchResult(savedMovies);
  }, [setSearchSaved, setShortSaved, savedMovies]);

  return (
    <main className="movies">
      <SearchForm
        onSubmit={handleSubmit(onSubmit)}
        isValid={isValid}
        savedMovies={savedMovies}
        checked={checked}
      >
        <SearchInput
          className={`search__input  ${errors.searchSaved ? 'search__input_invalid' : ''}`}
          type="text"
          name="searchSaved"
          placeholder="Фильм"
          value={searchSaved || ''}
          register={{
            ...register('searchSaved', {
              onChange: (e) => {
                setSearchSaved(e.target.value);
              },
              required: 'Поле должно быть заполнено',
              maxLength: {
                value: 30,
                message: 'Максимальная длина 30 символов',
              },
            }),
          }}
          error={errors.searchSaved}
        />
        <FilterCheckbox
          className="checkbox__input"
          type="checkbox"
          name="checkbox"
          checked={isShortSaved || false}
          register={{
            ...register('checkbox', {
              onChange: (e) => {
                setShortSaved(e.target.checked);
              },
            }),
          }}
        />
      </SearchForm>

      <MoviesCardList movies={searchResult} onRemoveMovie={onRemoveMovie} welcome={welcome} />
    </main>
  );
}

export default SavedMovies;
