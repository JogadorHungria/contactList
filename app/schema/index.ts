import { z } from "zod";

export const loginSchema = z.object({
  password: z.string().refine((val) => val.length >= 4, {
    message: "Deve conter no minimo 4 caracteres",
  }),

  email: z.string().email("Deve ser um E-mail valido"),
});

export type TLogin = z.infer<typeof loginSchema>;
