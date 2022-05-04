import React, { FC, LegacyRef } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './components/FormInput';

interface Login {
  login: string;
  password: string;
}

const App: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit = ({ login, password }: Login) => {
    alert(`Login: ${login}, password: ${password}`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="login">Login</label>

      <FormInput
        id="login"
        type="text"
        name="login"
        label="login"
        register={register}
        error={errors.login}
      />

      <FormInput
        id="password"
        type="password"
        name="password"
        label="password"
        register={register}
        error={errors.password}
      />

      <button>Log in</button>
    </form>
  );
};

export default App;
