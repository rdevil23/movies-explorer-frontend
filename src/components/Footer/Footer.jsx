import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__paragraph">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__block">
        <p className="footer__year">© 2023</p>
        <ul className="footer__links">
          <li className="footer__ya">
            <a href="https://ya.ru/" target="_blank" rel="noreferrer" className="footer__link">
              Яндекс.
            </a>
            <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">
              Практикум
            </a>
          </li>
          <li>
            <a href="https://github.com/rdevil23" target="_blank" rel="noreferrer" className="footer__link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
