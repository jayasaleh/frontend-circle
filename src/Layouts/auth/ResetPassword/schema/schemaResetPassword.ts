import { z } from 'zod';

export const schemaResetPassword = z
  .object({
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

export type ResetPasswordDTO = z.infer<typeof schemaResetPassword>;
