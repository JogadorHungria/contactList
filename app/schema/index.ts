import { z } from "zod";

export const loginSchema = z.object({
  password: z.string().refine((val) => val.length >= 4, {
    message: "Deve conter no minimo 4 caracteres",
  }),

  email: z.string().email("Deve ser um E-mail valido"),
});

export const registerSchema = z
  .object({
    email: z
      .string()
      .nonempty("Requerido")
      .email({ message: "Deve ser um E-mail valido" }),

    password: z
      .string()
      .nonempty("Requerido")
      .min(4, { message: "Deve conter no mínimo 4 caracteres." }),

    completName: z.string().nonempty("Requerido"),

    contactPhone: z.string().nonempty("Requerido").min(10).max(11),
  })
  .required();

export type TRegister = z.infer<typeof registerSchema>;
export type TLogin = z.infer<typeof loginSchema>;
