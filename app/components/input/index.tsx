import { type } from "os";

type IType = "text" | "password";

interface Input {
  name: string;
  register: any;
  type: IType;
}

export const Input = ({ name, register, type }: any) => {
  return (
    <>
      <label htmlFor={name.toLowerCase()}>{name}</label>
      <input
        {...register(name.toLowerCase())}
        id={name.toLowerCase()}
        type={type}
      />
    </>
  );
};
