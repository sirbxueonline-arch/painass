import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Ad ən az 2 simvol olmalıdır").max(100),
  phone: z
    .string()
    .min(9, "Düzgün telefon nömrəsi daxil edin")
    .max(20)
    .regex(/^[\d\s\+\-\(\)]+$/, "Düzgün telefon nömrəsi formatı"),
  email: z
    .string()
    .email("Düzgün e-poçt ünvanı daxil edin")
    .optional()
    .or(z.literal("")),
  service: z.string().optional(),
  preferredDate: z.string().optional(),
  message: z.string().max(1000).optional(),
  // Honeypot — must be empty
  website: z.string().max(0, "").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
