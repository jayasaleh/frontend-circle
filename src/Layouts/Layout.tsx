import React from "react";
import { Outlet } from "react-router-dom";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
function Layout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] h-screen ">
      <aside className=" md:w-full hidden md:block ">
        <LeftSide />
      </aside>
      <main className=" md:max-w-[850px] pt-2 ">
        <Outlet />
      </main>
      <aside className="md:w-[300px] md:block ">
        <RightSide />
      </aside>
    </div>
  );
}

export default Layout;
