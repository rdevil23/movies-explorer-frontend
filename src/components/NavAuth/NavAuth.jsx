import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './NavAuth.css';
import burgerIco from '../../images/icons/burger-ico.svg';
import closeIco from '../../images/icons/close-ico.svg';

function NavAuth() {
  const [isBlurActive, setBlurActive] = useState(false);

  function sidebarHandle() {
    return setBlurActive(!isBlurActive);
  }
  return (
    <>
      <nav className="navauth">
        <ul className={`navauth__list ${isBlurActive ? 'sidebar' : ''}`}>
          <img
            src={closeIco}
            alt="Кнопка закрытия burger-меню"
            onClick={sidebarHandle}
            className="sidebar__btn sidebar__close-btn"
          />
          <li className="navauth__element">
            <NavLink className="navauth__reg" to="signup">
              Регистрация
            </NavLink>
          </li>
          <li className="navauth__element">
            <NavLink className="navauth__auth" to="signin">
              Войти
            </NavLink>
          </li>
        </ul>
        <div className={`blur ${isBlurActive ? 'blur_active' : ''}`}></div>
      </nav>
      <img
        src={burgerIco}
        alt="Кнопка burger-меню"
        onClick={sidebarHandle}
        className="sidebar__btn"
      />
    </>
  );
}

export default NavAuth;
