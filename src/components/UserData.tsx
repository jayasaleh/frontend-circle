import { AuthContext } from "@/contexts/auth";
import { useContext } from "react";

function UserData() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <section>
      <h2>Logged In User</h2>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <p>Email: {user.email}</p>
    </section>
  );
}

export default UserData;
