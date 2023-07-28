"use client";
import "app/loginPage.scss";
import { useForm } from "react-hook-form";
import { TLogin, loginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "./services/api";
import { Input } from "./components/input";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });

  const LoginRequisition = async (data: TLogin) => {
    try {
      const response = await api.post<any>("/users/login", data);

      const { token } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@contactList:token", token);

      location.href = "/dashboard";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit(LoginRequisition)}>
          <Input name="Email" register={register} type="text" />
          <span>{errors.email?.message && <p>{errors.email?.message}</p>}</span>

          <Input name="password" register={register} type="password" />
          <span>
            {errors.password?.message && <p>{errors.password?.message}</p>}
          </span>
          <button type="submit">Entrar</button>
        </form>

        <button
          type="button"
          className="register"
          onClick={() => (location.href = "/register")}
        >
          Registrar
        </button>
      </div>
    </main>
  );
};

export default Page;
