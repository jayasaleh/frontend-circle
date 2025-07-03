interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  photo?: string;
  bio?: string;
}
export type UserWithFollowStatus = User & {
  isFollowedByCurrentUser: boolean;
};
export type { User };
