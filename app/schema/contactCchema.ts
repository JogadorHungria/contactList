import { z } from "zod";

export const contactSchema = z.object({
  id: z.number(),
  completName: z.string({}).nonempty("Requirid"),
  contactPhone: z
    .string()
    .min(11, { message: "Digite um telefone valido" })
    .max(11, { message: "Digite um telefone valido" }),
  createdAt: z.string().nonempty("requirid"),
  email: z.string().email({ message: "Email invalido !" }),
});

export const contactCreationSchema = contactSchema.omit({
  id: true,
  createdAt: true,
});

export const updateContactSchema = contactCreationSchema.partial();

export type TContact = z.infer<typeof contactSchema>;
export type TContactUpdate = z.infer<typeof updateContactSchema>;
export type TContactCreation = z.infer<typeof contactCreationSchema>;
