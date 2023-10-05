import { Link } from 'react-router-dom';

import './AuthForm.css';
import logo from '../../images/logo.svg';
import AuthButton from '../AuthButton/AuthButton';

const AuthForm = ({ title, buttonText, children, isValid }) => {
  return (
    <>
      <main className="auth">
        <div className="auth__block">
          <div className="auth__header-block">
            <Link to="/" className="auth__logo">
              <img src={logo} alt="Логотип" />
            </Link>
          </div>
          <h1 className="auth__header">{title}</h1>
          <form className="auth__form">
            <div className="auth__inputs-block">{children}</div>
            <AuthButton buttonText={buttonText} isValid={isValid} />
          </form>
        </div>
      </main>
    </>
  );
};

export default AuthForm;
