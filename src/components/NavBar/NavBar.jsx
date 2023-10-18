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
        </ul>
        <div className={`navbar__profile ${isBlurActive ? 'navbar__profile_active' : ''}`}>
          <NavLink to="/profile" onClick={sidebarHandle} className="navbar__link">
            <p className="navbar__text">Аккаунт</p>
            <div
              className={`navbar__profile-ico ${
                location.pathname === '/' ? 'navbar__profile-ico_on-main' : ''
              }`}
            >
              <img src={profileIco} alt="Иконка профиля" />
            </div>
          </NavLink>
        </div>
        <div className={`blur ${isBlurActive ? 'blur_active' : ''}`}></div>
      </nav>
      <img
        src={closeIco}
        alt="Кнопка закрытия меню"
        onClick={sidebarHandle}
        className={`sidebar-close-btn ${isBlurActive ? 'sidebar-close-btn_active' : ''}`}
      />
      <img src={burgerIco} alt="Кнопка меню" onClick={sidebarHandle} className="sidebar-btn" />
    </>
  );
}

export default NavBar;
