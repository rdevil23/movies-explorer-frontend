import './AboutMe.css';
import aboutmePhoto from '../../images/photo.jpg';

const AboutMe = () => {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__block">
        <div className="aboutme__text">
          <div className="aboutme__text-block">
            <h3 className="aboutme__name">Виталий</h3>
            <p className="aboutme__profession">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme__about">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и
              дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
              работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <a
            href="https://github.com/rdevil23"
            target="_blank"
            rel="noreferrer"
            className="aboutme__link"
          >
            Github
          </a>
        </div>
        <img className="aboutme__photo" src={aboutmePhoto} alt="фото студента" />
      </div>
    </section>
  );
};

export default AboutMe;
