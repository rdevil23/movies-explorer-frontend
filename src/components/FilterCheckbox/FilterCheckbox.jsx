import { useForm } from 'react-hook-form';
import './FilterCheckbox.css';

const FilterCheckbox = ({ className, type, name, placeholder, checked, register }) => {
  return (
    <section className="checkbox">
      <label className="checkbox__tumb">
        <input
          className={className}
          type={type}
          name={name}
          placeholder={placeholder}
          checked={checked}
          {...register}
        />
        <span className="checkbox__slider"></span>
      </label>
      <p className="checkbox__tumb-text">Короткометражки</p>
    </section>
  );
};

export default FilterCheckbox;
