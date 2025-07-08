import { z } from 'zod';

export const schemaForgotPassword = z.object({
  email: z.string().email('Invalid email'),
});
export type ForgotPasswordDTO = z.infer<typeof schemaForgotPassword>;
