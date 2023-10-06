import { useForm } from 'react-hook-form';

import Input from '../Input/Input';
import AuthForm from '../AuthForm/AuthForm';

const Register = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <AuthForm title="Добро пожаловать!" buttonText="Зарегистрироваться" isValid={isValid}>
      <Input
        className={`auth__input ${errors.name && 'auth__input_invalid'}`}
        type="text"
        name="username"
        inputName="Имя"
        autoComplete="off"
        placeholder="Введите имя"
        register={{
          ...register('name', {
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
        error={errors.name}
      />
      <Input
        className={`auth__input ${errors.email && 'auth__input_invalid'}`}
        type="email"
        name="email"
        inputName="E-mail"
        autoComplete="email"
        placeholder="Введите Email"
        register={{
          ...register('email', {
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
        className={`auth__input ${errors.password && 'auth__input_invalid'}`}
        type="password"
        name="password"
        inputName="Пароль"
        autoComplete="off"
        placeholder="Введите пароль"
        register={{
          ...register('password', {
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
