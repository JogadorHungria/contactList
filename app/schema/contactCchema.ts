import { z } from "zod";

export const contactSchema = z.object({
  id: z.number(),
  completName: z.string(),
  contactPhone: z.string(),
  createdAt: z.string(),
  email: z.string(),
});

export type TContact = z.infer<typeof contactSchema>;
