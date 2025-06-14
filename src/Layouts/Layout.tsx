import React from "react";
import { Outlet } from "react-router-dom";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function Layout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr]   h-screen">
      <aside className="hidden md:block ">
        <LeftSide />
      </aside>
      <main className=" pt-5 pl-3">
        <Outlet />
      </main>
      <aside className="pt-2 hidden md:block ">
        <RightSide />
      </aside>
    </div>
  );
}

export default Layout;
