import { FieldErrors, FieldValues } from "react-hook-form";

type IType = "text" | "password" | "email" | "tel";

interface IInput {
  labelName: string;
  name: string;
  register: any;
  type: IType;
  error?: string;
}

export const Input = ({ error, labelName, name, register, type }: IInput) => {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <input {...register(name)} id={name.toLowerCase()} type={type} />
      <p>{error && error}</p>
    </>
  );
};
