import type { FC, LegacyRef } from 'react';
import { FieldError } from 'react-hook-form';

interface FormProps {
  register: LegacyRef<HTMLInputElement> | undefined;
  error: FieldError | undefined;
  label: string;
  id: string;
  type: string;
  name: string;
}

const FormInput: FC<FormProps> = ({
  register,
  error,
  label,
  id,
  ...inputProps
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input ref={register} id={id} {...inputProps} />
      {error && <div>{error.message}</div>}
    </>
  );
};

export default FormInput;
