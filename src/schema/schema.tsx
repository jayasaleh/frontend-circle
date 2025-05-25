import { z } from "zod";

export const schemaLogin = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});
export const schemaRegister = z.object({
  username: z.string().min(3, "username wajib diisi"),
  email: z
    .string()
    .min(1, "email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(6, "password minimal 6 karakter")
    .refine((val) => /[!@#$%^&*()]/.test(val), {
      message: "Password must include at least one special character",
    }),
});
