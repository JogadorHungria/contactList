type IType = "text" | "password" | "email";

interface IInput {
  name: string;
  register: any;
  type: IType;
}

export const Input = ({ name, register, type }: IInput) => {
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
