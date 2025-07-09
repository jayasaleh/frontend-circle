import { User } from './user';

export type Tweet = {
  id: number;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  images: string | null;
  user: User;
  _count: {
    likes: number;
    comments: number;
  };
};
