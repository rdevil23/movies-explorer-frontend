import { Link } from 'react-router-dom';

import './AuthButton.css';

const AuthButton = ({ buttonText, isValid }) => {
  return (
    <div className="auth-btns-block">
      <button
        className={`auth__button ${!isValid ? 'auth__button_disabled' : ''}`}
        type="submit"
        disabled={!isValid}
      >
        {buttonText}
      </button>
      {buttonText === 'Войти' ? (
        <p className="auth__nav-text">
          Ещё не зарегистрированы?{' '}
          <Link to="/signup" className="auth__link">
            Регистрация
          </Link>
        </p>
      ) : (
        <p className="auth__nav-text">
          Уже зарегистрированы?{' '}
          <Link to="/signin" className="auth__link">
            Войти
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthButton;
