import { useNavigate, Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="notfound">
      <div className="notfound__block">
        <div className="notfound__main">
          <h1 className="notfound__header">404</h1>
          <p className="notfound__text">Страница не найдена</p>
        </div>
        <Link
          to="films"
          onClick={() => {
            navigate(-1);
          }}
          className="notfound__goBackLink"
        >
          Назад
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
