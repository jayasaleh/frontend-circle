import { User } from "../types/user";

interface UserListProps {
  users: User[];
}
export default function UserList({ users }: UserListProps) {
  return (
    <ul id="user-list">
      {users.map((user) => (
        <li>
          <h2>{user.username}</h2>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
}
