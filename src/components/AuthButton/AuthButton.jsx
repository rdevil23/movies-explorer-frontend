import { Link, useNavigate } from 'react-router-dom';

import './AuthButton.css';

const AuthButton = ({ buttonText, isValid }) => {
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    buttonText === 'Войти' ? navigate('/movies') : navigate('/signin');
  }

  return (
    <div className="auth-btns-block">
      <button
        className={`auth__button ${!isValid && 'auth__button_disabled'}`}
        type="submit"
        disabled={!isValid}
        onClick={handleLogin}
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
