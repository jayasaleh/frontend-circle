interface User {
  banner: string | undefined;
  banner: any;
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
