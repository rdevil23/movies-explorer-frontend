import './Promo.css';
import promoLogo from '../../images/web-logo.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__block">
        <div className="promo__text-block">
          <h1 className="promo__header">Учебный проект студента факультета Веб‑разработки.</h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img className="promo__logo" src={promoLogo} alt="Логотип WEB" />
      </div>
      <div className="promo__button">
        <a href="#about" className="promo__button-text">
          Узнать больше
        </a>
      </div>
    </section>
  );
};

export default Promo;
