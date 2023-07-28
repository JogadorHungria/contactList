type IType = "text" | "password" | "email" | "tel";

interface IInput {
  labelName: string;
  name: string;
  register: any;
  type: IType;
}

export const Input = ({ labelName, name, register, type }: IInput) => {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <input {...register(name)} id={name.toLowerCase()} type={type} />
    </>
  );
};
