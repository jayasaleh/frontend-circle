import { User } from './user';

export type TweetProfile = {
  id: number;
  content: string;
  userId: number;
  createdAt: string;
  images: string | null;
  user: User;
  _count: {
    comments: number;
    likes: number;
  };
};
