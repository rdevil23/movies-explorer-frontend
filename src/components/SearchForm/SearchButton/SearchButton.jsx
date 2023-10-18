import './SearchButton.css';

const SearchButton = ({ isValid }) => {
  return (
    <>
      <button
        className={`search__button ${!isValid ? 'search__button_disabled' : ''}`}
        type="submit"
        disabled={!isValid}
      >
        Поиск
      </button>
    </>
  );
};

export default SearchButton;
