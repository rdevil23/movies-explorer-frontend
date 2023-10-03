import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search">
      <div className="search__block">
        <input className="search__input" name="search__input" placeholder="Фильм"></input>
        <button className="search__button">Поиск</button>
      </div>
    </section>
  );
};

export default SearchForm;
