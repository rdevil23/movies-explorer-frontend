import SearchButton from './SearchButton/SearchButton';
import './SearchForm.css';

const SearchForm = ({ onSubmit, isValid, children, error }) => {
  return (
    <>
      <form noValidate className="search" onSubmit={onSubmit} error={error}>
        <div className="search__block">
          {children[0]}
          <SearchButton isValid={isValid} />
          <div className="search__error-block">
            {error && <div className="search__error">{error.message}</div>}
          </div>
        </div>
        {children[1]}
      </form>
    </>
  );
};

export default SearchForm;
