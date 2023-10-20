import './SearchInput.css';

const SearchInput = ({ className, type, name, placeholder, value, onChange, register }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...register}
    />
  );
};

export default SearchInput;
