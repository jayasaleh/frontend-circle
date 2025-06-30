export type Following = {
  id: number;
  followerId: number;
  followeeId: number;
  followee: {
    id: number;
    username: string;
    photo?: string;
    name: string;
  };
};
