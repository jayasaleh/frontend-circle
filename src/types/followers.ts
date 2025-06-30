export type Followers = {
  followerId: number;
  followeeId: number;
  id: number;
  follower: {
    id: number;
    username: string;
    photo?: string;
    name: string;
  };
};
