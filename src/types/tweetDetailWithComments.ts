import { Comment } from './comment';
import { User } from './user';

export type TweetDetailWithComments = {
  id: number;
  content: string;
  createdAt: string;
  images: string;
  imagesPublicId: string;
  user: User;
  comments: Comment[];
  _count: {
    likes: number;
    comments: number;
  };
};
