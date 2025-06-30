import { LikeComment } from './likeComment';
import { User } from './user';

export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  tweetId: number;
  parentId?: number | null;
  replies?: Comment[];
  likeComment?: LikeComment[];
};
