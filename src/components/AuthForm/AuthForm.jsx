import { Link } from 'react-router-dom';

import './AuthForm.css';
import logo from '../../images/logo.svg';
import AuthButton from '../AuthButton/AuthButton';

const AuthForm = ({ title, buttonText, children, isValid }) => {
  return (
    <>
      <section className="auth">
        <div className="auth__block">
          <div className="auth__header-block">
            <Link to="/">
              <img src={logo} alt="Логотип" className="auth__logo" />
            </Link>
          </div>
          <h2 className="auth__header">{title}</h2>
          <form className="auth__form">
            <div className="auth__inputs-block">{children}</div>
            <AuthButton buttonText={buttonText} isValid={isValid} />
          </form>
        </div>
      </section>
    </>
  );
};

export default AuthForm;
