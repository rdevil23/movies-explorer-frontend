import { NavLink } from 'react-router-dom';

import './NavAuth.css';

function NavAuth() {
  return (
    <>
      <nav className="navauth">
        <ul className="navauth__list">
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
        <div className="blur"></div>
      </nav>
    </>
  );
}

export default NavAuth;
