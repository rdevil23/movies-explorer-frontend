import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Input from '../Input/Input';
import AuthForm from '../AuthForm/AuthForm';

const Login = ({ onLogin }) => {
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
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', password: '' });
    }
  }, [formState, submittedData, reset]);

  const onSubmit = () => {
    setSubmittedData({ email, password });
    onLogin({ email, password });
  };

  return (
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      isValid={isValid}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className={`auth__input ${errors.email && 'auth__input_invalid'}`}
        value={email}
        type="email"
        name="email"
        inputName="E-mail"
        autoComplete="email"
        placeholder="Протестировать: test@mail.ru"
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
        className={`auth__input ${errors.password && 'auth__input_invalid'}`}
        value={password}
        type="password"
        name="password"
        inputName="Пароль"
        autoComplete="on"
        placeholder="Протестировать: test1234"
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

export default Login;
