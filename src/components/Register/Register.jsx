import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '../Input/Input';
import AuthForm from '../AuthForm/AuthForm';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedData, setSubmittedData] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: { username, email, password },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ username: '', email: '', password: '' });
    }
  }, [formState, submittedData, reset]);

  function onSubmit() {
    setSubmittedData({ username, email, password });
    onRegister({ email, password, username });
  }

  return (
    <AuthForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      isValid={isValid}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className={`auth__input ${errors.username ? 'auth__input_invalid' : ''}`}
        value={username}
        type="text"
        name="username"
        inputName="Имя"
        autoComplete="off"
        placeholder="Введите имя"
        register={{
          ...register('username', {
            onChange: (e) => {
              setUsername(e.target.value);
            },
            required: 'Поле должно быть заполнено',
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
          }),
        }}
        error={errors.username}
      />
      <Input
        className={`auth__input ${errors.email ? 'auth__input_invalid' : ''}`}
        value={email}
        type="email"
        name="email"
        inputName="E-mail"
        autoComplete="email"
        placeholder="Введите Email"
        register={{
          ...register('email', {
            onChange: (e) => {
              setEmail(e.target.value);
            },
            required: 'Поле должно быть заполнено',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'E-mail указан неверно',
            },
          }),
        }}
        error={errors.email}
      />
      <Input
        className={`auth__input ${errors.password ? 'auth__input_invalid' : ''}`}
        value={password}
        type="password"
        name="password"
        inputName="Пароль"
        autoComplete="off"
        placeholder="Введите пароль"
        register={{
          ...register('password', {
            onChange: (e) => {
              setPassword(e.target.value);
            },
            required: 'Поле должно быть заполнено',
            minLength: {
              value: 8,
              message: 'Минимальная длина 8 символов',
            },
            maxLength: {
              value: 30,
              message: 'Максимальная длина 30 символов',
            },
          }),
        }}
        error={errors.password}
      />
    </AuthForm>
  );
};

export default Register;
