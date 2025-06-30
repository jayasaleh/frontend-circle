import { Comment } from './comment';
import { LikeTweet } from './likeTweet';
import { User } from './user';

export type Tweet = {
  id: number;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  images: string | null;
  user: User;
  likes: LikeTweet[];
  comments: Comment[];
};
