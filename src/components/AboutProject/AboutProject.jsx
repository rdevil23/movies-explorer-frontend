import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about">
      <h2 className="about__title" id="about">
        О проекте
      </h2>
      <div className="about__text-container">
        <div className="about__text-block">
          <p className="about__text-header">Дипломный проект включал 5 этапов</p>
          <p className="about__text-paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="about__text-block">
          <p className="about__text-header">На выполнение диплома ушло 5 недель</p>
          <p className="about__text-paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__graph-container">
        <div className="about__graph-block about__graph-block-left">
          <div className="about__graph-header about__graph-header-left">1 неделя</div>
          <p className="about__graph-paragraph">Back-end</p>
        </div>
        <div className="about__graph-block about__graph-block-right">
          <div className="about__graph-header about__graph-header-right">4 недели</div>
          <p className="about__graph-paragraph">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
