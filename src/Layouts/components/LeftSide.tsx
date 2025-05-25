import { Button } from "@/components/ui/button";
import {
  Heart,
  Home,
  LogIn,
  LogOut,
  LogOutIcon,
  Plus,
  Search,
  User,
} from "lucide-react";
import { TbLogout2 } from "react-icons/tb";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import CreatePostModal from "@/components/CreatePostModal";

function Navigation() {
  const location = useLocation(); // Mendapatkan path halaman aktif

  return (
    <div className="w-1/4 flex flex-col justify-between border-r p-4">
      <div className="flex flex-col space-y-7">
        <h2 className="text-4xl font-bold mb-4 text-green-600">Circle</h2>
        <NavLink
          to="/"
          className={`flex items-center gap-2 hover:underline ${
            location.pathname === "/" ? "text-green-600 font-bold" : ""
          }`}
        >
          <Home size={30} />
          <span className="text-2xl">Home</span>
        </NavLink>
        <NavLink
          to="/search"
          className={`flex items-center gap-2 hover:underline ${
            location.pathname === "/search" ? "text-green-600 font-bold" : ""
          }`}
        >
          <Search size={30} />
          <span className="text-2xl">Search</span>
        </NavLink>
        <NavLink
          to="/follows"
          className={`flex items-center gap-2 hover:underline ${
            location.pathname === "/follows" ? "text-green-600 font-bold" : ""
          }`}
        >
          <Heart size={30} />
          <span className="text-2xl">Follows</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={`flex items-center gap-2 hover:underline ${
            location.pathname === "/profile" ||
            location.pathname === "/media-profile"
              ? "text-green-600 font-bold"
              : ""
          }`}
        >
          <User size={30} />
          <span className="text-2xl">Profile</span>
        </NavLink>
        <CreatePostModal />
      </div>

      <div className="flex flex-row justify-start items-center">
        <TbLogout2 size={40} />
        <NavLink to="/login" className="px-10 py-2 ">
          <span className="text-2xl"> Log Out</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
