import { z } from "zod";
import { contactSchema } from "./contactCchema";
import { type } from "os";

export const userSchema = z.object({
  id: z.number(),
  completName: z.string().nonempty(),
  contactPhone: z
    .string()
    .min(11, { message: "Digite um telefone valido" })
    .max(11, { message: "Digite um telefone valido" }),
  createdAt: z.string(),
  email: z.string().nonempty("requirid").email({ message: "Email invalido !" }),
  contacts: contactSchema.array(),
});

export type TUser = z.infer<typeof userSchema>;
