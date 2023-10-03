import headerLogo from '../../images/logo.svg';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import NavAuth from '../NavAuth/NavAuth';
import { Link } from 'react-router-dom';

function Header({ loggedIn }) {
  return (
    <header className={`${loggedIn ? 'header header_authorized' : 'header'}`}>
      <Link to="/">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </Link>
      {loggedIn ? <NavBar /> : <NavAuth />}
    </header>
  );
}

export default Header;
