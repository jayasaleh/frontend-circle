import React, { useEffect, useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import axios from "axios";
interface AppLayoutProps {
  children: React.ReactNode;
}
interface User {
  name: string;
  username: string;
}
const [user, setUser] = useState<User | null>(null);
useEffect(() => {
  const token = localStorage.getItem("token");
  try {
  } catch (error) {}
  if (!token) return;
  axios
    .get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      setUser(res.data.user);
    })
    .catch(() => {
      setUser(null);
    });
}, []);
function Layout({ children }: AppLayoutProps) {
  return (
    <div className="flex w-full gap-y-2 scale-94 h-screen">
      <LeftSide />
      {children}
      <RightSide />
    </div>
  );
}

export default Layout;
