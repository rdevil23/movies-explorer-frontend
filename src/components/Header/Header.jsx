import headerLogo from '../../images/logo.svg';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import NavAuth from '../NavAuth/NavAuth';
import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn }) {
  const location = useLocation();
  return (
    <header
      className={`${loggedIn && location.pathname !== '/' ? 'header header_authorized' : 'header'}`}
    >
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </Link>
      {loggedIn ? <NavBar loggedIn={loggedIn} /> : <NavAuth />}
    </header>
  );
}

export default Header;
