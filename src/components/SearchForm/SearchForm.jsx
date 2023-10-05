import { useForm } from 'react-hook-form';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

const SearchForm = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });
  return (
    <form className="search">
      <div className="search__block">
        <input
          className={`search__input  ${errors.search ? 'search__input_invalid' : ''}`}
          type="text"
          name="search"
          placeholder="Фильм"
          {...register('search', {
            required: 'Поле должно быть заполнено',
            pattern: {
              value: /^[A-Za-zА-Яа-яЁё0-9 /s -]/,
              message: 'Не похоже на название фильма',
            },
            minLength: {
              value: 2,
              message: 'Минимальная длина 2 символа',
            },
            maxLength: {
              value: 30,
              message: 'Максимальная длина 30 символов',
            },
          })}
        ></input>
        <button
          className={`search__button ${!isValid ? 'search__button_disabled' : ''}`}
          type="submit"
          disabled={!isValid}
        >
          Поиск
        </button>
        <div className="search__error-block">
          {errors.search && <div className="search__error">{errors.search.message}</div>}
        </div>
      </div>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
