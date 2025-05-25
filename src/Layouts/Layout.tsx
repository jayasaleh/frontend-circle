import React, { useEffect, useState } from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import axios from "axios";
import { Outlet } from "react-router-dom";
interface AppLayoutProps {
  children: React.ReactNode;
}
interface User {
  name: string;
  username: string;
}
// const [user, setUser] = useState<User | null>(null);
// useEffect(() => {
//   const token = localStorage.getItem("token");
//   if (!token) return;
//   axios
//     .get("/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//     .then((res) => {
//       setUser(res.data.user);
//     })
//     .catch(() => {
//       setUser(null);
//     });
// }, []);
function Layout() {
  return (
    <div className="grid grid-cols-[300px_1fr_350px] md:grid-cols-1 h-screen">
      <aside className="hidden md:block">
        <LeftSide />
      </aside>
      <main className="overflow-x-hidden pt-5 pl-3">
        <Outlet />
      </main>
      <aside className="pt-2 hidden md:block">
        <RightSide />
      </aside>
    </div>
  );
}

export default Layout;
