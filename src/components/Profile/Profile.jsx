import { useForm } from 'react-hook-form';

import './Profile.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Profile = () => {
  const [isEditing, setEditing] = useState(false);
  const [defaultName, setName] = useState('Виталий');
  const [defaultEmail, setEmail] = useState('pochta@yandex.ru');
  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  };
  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  function handleSave(e) {
    e.preventDefault();
    setEditing(false);
  }

  return (
    <>
      <main className="profile">
        <div className="profile-block">
          <h1 className="profile__header">Привет, Виталий!</h1>
          <form className="profile__form">
            <ul className="profile__list">
              <li className="profile__element">
                Имя
                <input
                  className={`profile__input ${errors.name ? 'profile__input_invalid' : ''}`}
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder={defaultName}
                  onChange={(e) => setName(e.target.value)}
                  {...register('name', {
                    required: 'Поле Имя должно быть заполнено',
                    pattern: {
                      value: /^[A-Za-zА-Яа-яЁё /s -]/,
                      message: 'Имя указано неверно',
                    },
                    minLength: {
                      value: 2,
                      message: 'Минимальная длина 2 символа',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Максимальная длина 30 символов',
                    },
                  })}
                  disabled={!isEditing}
                />
              </li>
              <li className="profile__element">
                E-mail
                <input
                  className={`profile__input ${errors.email ? 'profile__input_invalid' : ''}`}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={defaultEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  {...register('email', {
                    required: 'Поле E-mail должно быть заполнено',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'E-mail указан неверно',
                    },
                  })}
                  disabled={!isEditing}
                />
              </li>{' '}
            </ul>
            <div className="profile__btns-block">
              <div className="profile__error-block">
                {errors.name && <div className="profile__error">{errors.name.message}</div>}
                {errors.email && <div className="profile__error">{errors.email.message}</div>}
              </div>
              {!isEditing ? (
                <>
                  <button className="profile__edit-btn" type="button" onClick={handleEdit}>
                    Редактировать
                  </button>
                  <Link to="/" className="profile__logout-btn">
                    Выйти из аккаунта
                  </Link>
                </>
              ) : (
                <>
                  <button
                    className={`profile__save-btn ${!isValid && 'profile__save-btn_disabled'}`}
                    disabled={!isValid}
                    type="submit"
                    onClick={handleSave}
                  >
                    Сохранить
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Profile;
