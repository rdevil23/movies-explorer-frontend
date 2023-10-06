import { useState } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="checkbox">
      <div
        className={`checkbox__tumb ${isActive ? 'checkbox__tumb_active' : ''}`}
        onClick={handleClick}
      >
        <div className={`checkbox__dot ${isActive ? 'checkbox__dot_active' : ''}`}></div>
      </div>
      <p className="checkbox__tumb-text">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
