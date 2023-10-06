import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__name">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-block">
          <a
            href="https://github.com/rdevil23/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            Статичный сайт <p className="link-ico">↗</p>
          </a>
        </li>
        <li className="portfolio__link-block">
          <a
            href="https://github.com/rdevil23/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            Адаптивный сайт <p className="link-ico">↗</p>
          </a>
        </li>
        <li className="portfolio__link-block">
          <a
            href="https://github.com/rdevil23/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            Одностраничное приложение <p className="link-ico">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
