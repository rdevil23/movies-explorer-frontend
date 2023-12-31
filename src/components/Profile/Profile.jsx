import { useForm } from 'react-hook-form';

import './Profile.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const Profile = ({ onUpdateUser, onLogOut }) => {
  const currentUser = useContext(CurrentUserContext);

  const [username, setUsername] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [submittedData, setSubmittedData] = useState({});

  const [isEditing, setEditing] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues: { username: currentUser.name, email: currentUser.email },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ username: '', email: '' });
    }
  }, [formState, submittedData, reset]);

  function onSubmit() {
    setSubmittedData({ username, email });
    onUpdateUser({ username, email });
    setEditing(false);
  }

  return (
    <>
      <main className="profile">
        <section className="profile__block">
          <h1 className="profile__header">{`Привет, ${currentUser.name}!`}</h1>
          <form className="profile__form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <ul className="profile__list">
              <li className="profile__element">
                Имя
                <input
                  className={`profile__input ${errors.name ? 'profile__input_invalid' : ''}`}
                  type="text"
                  name="username"
                  autoComplete="off"
                  value={username}
                  placeholder="Введите имя"
                  {...register('username', {
                    onChange: (e) => {
                      setUsername(e.target.value);
                    },
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
                  value={email}
                  placeholder="Введите почту"
                  {...register('email', {
                    onChange: (e) => {
                      setEmail(e.target.value);
                    },
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
                {errors.username && <div className="profile__error">{errors.username.message}</div>}
                {errors.email && <div className="profile__error">{errors.email.message}</div>}
              </div>
              {!isEditing ? (
                <>
                  <button className="profile__edit-btn" type="button" onClick={handleEdit}>
                    Редактировать
                  </button>
                  <Link to="/" className="profile__logout-btn" onClick={onLogOut}>
                    Выйти из аккаунта
                  </Link>
                </>
              ) : (
                <>
                  <button
                    className={`profile__save-btn ${
                      !isDirty || !isValid ? 'profile__save-btn_disabled' : ''
                    }`}
                    disabled={!isDirty || !isValid}
                    type="submit"
                  >
                    Сохранить
                  </button>
                </>
              )}
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Profile;
