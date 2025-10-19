import { z } from 'zod';

export type LoginDTO = z.infer<typeof schemaLogin>;
export const schemaLogin = z.object({
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid'),
  password: z.string().min(1, 'Password wajib diisi'),
});

export type RegisterDTO = z.infer<typeof schemaRegister>;
export const schemaRegister = z
  .object({
    name: z.string().min(4, 'Nama minimal 4 karakter'),
    username: z.string().min(4, 'Username minimal 4 karakter'),
    email: z
      .string()
      .min(1, 'email wajib diisi')
      .email('Format email tidak valid'),
    password: z
      .string()
      .min(6, 'password minimal 6 karakter')
      .refine((val) => /[!@#$%^&*()]/.test(val), {
        message: 'Password must include at least one special character',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password dan konfirmasi password tidak cocok',
    path: ['confirmPassword'],
  });
