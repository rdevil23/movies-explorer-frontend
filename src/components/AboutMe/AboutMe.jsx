import './AboutMe.css';
import aboutmePhoto from '../../images/photo.jpg';

const AboutMe = () => {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__block">
        <div className="aboutme__text">
          <div className="aboutme__text-block">
            <h3 className="aboutme__name">Dmitry</h3>
            <p className="aboutme__profession">Frontend Developer</p>
            <p className="aboutme__about">
              Привет! \n
              Чтобы воспользоваться серивсом для поиска фильмов зарегистрируйся или авторизуйся под данными тестового пользователя: \n
              Почта: test@mail.ru \n
              Пароль: test1234 \n
              По ссылкам ниже можно ознакомиться с репозиториями моих других проектов :)
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
