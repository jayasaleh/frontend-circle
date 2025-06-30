import { z } from 'zod';

export const schemaFollowing = z.object({
  userId: z.number(),
});
export type FollowingDTO = z.infer<typeof schemaFollowing>;
