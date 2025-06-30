import { z } from 'zod';

export const schemaTweetForm = z.object({
  content: z.string().min(1),
});
export type FollowingDTO = z.infer<typeof schemaTweetForm>;
