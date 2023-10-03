import { useForm } from 'react-hook-form';

import Input from '../Input/Input';
import AuthForm from '../AuthForm/AuthForm';

const Login = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <AuthForm title="Рады видеть!" buttonText="Войти" isValid={isValid}>
      <Input
        className={`auth__input ${errors.email && 'auth__input_invalid'}`}
        type="email"
        name="email"
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
        autoComplete="on"
        placeholder="Введите пароль"
        register={{
          ...register('password', {
            required: 'Поле должно быть заполнено',
            minLength: {
              value: 8,
              message: 'Минимальная длина 8 символов',
            },
          }),
        }}
        error={errors.password}
      />
    </AuthForm>
  );
};

export default Login;
