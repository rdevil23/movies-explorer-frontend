import './Input.css';

const Input = ({
  inputName,
  className,
  type,
  name,
  autoComplete,
  placeholder,
  onChange,
  register,
  error,
}) => {
  return (
    <>
      <div className="auth__input-block">
        <p className="auth__input-name">{inputName}</p>
        <input
          className={className}
          style={error ? { border: '1px solid var(--saved)' } : {}}
          type={type}
          name={name}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={onChange}
          {...register}
        />
      </div>
      <div className="auth__error-block">
        {error && <div className="auth__error">{error.message}</div>}
      </div>
    </>
  );
};

export default Input;
