"use client";

import "app/loginPage.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegister, registerSchema } from "../schema";
import { Input } from "../components/input";
import { api } from "../services/api";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
  });

  const cadastroRequisition = async (data: TRegister) => {
    try {
      const response = await api.post("/users", data);

      toast("Registrado com sucesso");
      toast("você vai ser redirecionado pra pagina de login");

      setTimeout(() => {
        location.href = "/";
      }, 3000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast(err.response?.data.message);
      } else {
        console.log("Erro desconhecido:", err);
      }
    }
  };

  return (
    <main>
      <div>
        <h1>Registro</h1>

        <form onSubmit={handleSubmit(cadastroRequisition)}>
          <Input
            labelName="Email"
            name="email"
            register={register}
            type="text"
          />
          <span>{errors.email?.message && <p>{errors.email?.message}</p>}</span>

          <Input
            labelName="Password"
            name="password"
            register={register}
            type="password"
          />
          <span>
            {errors.password?.message && <p>{errors.password?.message}</p>}
          </span>

          <Input
            labelName="Nome Completo"
            name="completName"
            register={register}
            type="text"
          />
          <span>
            {errors.completName?.message && (
              <p>{errors.completName?.message}</p>
            )}
          </span>

          <Input
            labelName="Telefone de contato"
            name="contactPhone"
            register={register}
            type="tel"
          />
          <span>
            {errors.contactPhone?.message && (
              <p>{errors.contactPhone?.message}</p>
            )}
          </span>
          <button type="submit">Registrar</button>
        </form>

        <button
          type="button"
          className="buttonAlterPage"
          onClick={() => (location.href = "/")}
        >
          Login
        </button>
      </div>
    </main>
  );
};

export default Page;
