import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './NavBar.css';
import profileIco from '../../images/icons/profile-ico.svg';
import burgerIco from '../../images/icons/burger-ico.svg';
import closeIco from '../../images/icons/close-ico.svg';

function NavBar() {
  const [isBlurActive, setBlurActive] = useState(false);
  const location = useLocation();

  function sidebarHandle() {
    return setBlurActive(!isBlurActive);
  }

  return (
    <>
      <nav className="navbar">
        <ul className={`navbar__list ${isBlurActive ? 'sidebar' : ''}`}>
          <img
            src={closeIco}
            alt="Кнопка закрытия меню"
            onClick={sidebarHandle}
            className="sidebar__btn sidebar__close-btn"
          />
          <li
            className={`navbar__element ${
              location.pathname === '/' ? 'navbar__element_active' : ''
            }`}
          >
            <NavLink to="/" onClick={sidebarHandle} className="navbar__link">
              Главная
            </NavLink>
          </li>
          <li
            className={`navbar__element ${
              location.pathname === '/movies' ? 'navbar__element_active' : ''
            }`}
          >
            <NavLink to="/movies" onClick={sidebarHandle} className="navbar__link">
              Фильмы
            </NavLink>
          </li>
          <li
            className={`navbar__element ${
              location.pathname === '/saved-movies' ? 'navbar__element_active' : ''
            }`}
          >
            <NavLink to="/saved-movies" onClick={sidebarHandle} className="navbar__link">
              Сохранённые фильмы
            </NavLink>
          </li>
          <div className="navbar__profile">
            <NavLink to="/profile" className="navbar__link">
              <p className="navbar__text">Аккаунт</p>
              <img src={profileIco} alt="Иконка профиля" className="navbar__profile-ico" />
            </NavLink>
          </div>
        </ul>
        <div className={`blur ${isBlurActive ? 'blur_active' : ''}`}></div>
      </nav>
      <img src={burgerIco} alt="Кнопка меню" onClick={sidebarHandle} className="sidebar__btn" />
    </>
  );
}

export default NavBar;
