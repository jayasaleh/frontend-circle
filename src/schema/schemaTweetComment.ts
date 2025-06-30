import { z } from 'zod';

export const schemaTweetComment = z.object({
  id: z.number(),
  content: z.string(),
  userId: z.number(),
  createdAt: z.date(),
  images: z.string().optional(),
  imagesPublicId: z.string().optional(),
  user: z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    photo: z.string().optional(),
  }),
  comments: z.object({
    id: z.number(),
    content: z.string(),
    userId: z.number(),
    tweetId: z.number(),
    parentId: z.number().optional(),
    createdAt: z.date(),
    user: z.object({
      id: z.number(),
      name: z.string(),
      username: z.string(),
      photo: z.string(),
    }),
  }),
  _count: z.object({
    likes: z.number(),
    comments: z.number(),
  }),
});
export type TweetCommentDTO = z.infer<typeof schemaTweetComment>;
