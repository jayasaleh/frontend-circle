import CreatePostModal from "@/components/CreatePostModal";
import { Button } from "@/components/ui/button";
import { useAuthLogin } from "@/stores/authLogin";
import { Heart, Home, Search, User } from "lucide-react";
import { TbLogout2 } from "react-icons/tb";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuthLogin();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="p-4 sticky top-0">
      <div className="flex flex-col space-y-7">
        <h2 className="text-2xl font-bold mb-4 text-green-600">Circle</h2>
        <NavLink
          to="/"
          className={`flex items-center gap-2 hover:underline ${
            location.pathname === "/" ? "text-green-600 font-bold" : ""
          }`}
        >
          <Home size={20} />
          <span className="text-xl">Home</span>
        </NavLink>
        <NavLink
          to="/search"
          className={`flex items-center gap-2 hover:underline ${
            location.pathname === "/search" ? "text-green-600 font-bold" : ""
          }`}
        >
          <Search size={20} />
          <span className="text-xl">Search</span>
        </NavLink>
        <NavLink
          to="/follows"
          className={`flex items-center gap-2 hover:underline ${
            location.pathname === "/follows" ? "text-green-600 font-bold" : ""
          }`}
        >
          <Heart size={20} />
          <span className="text-xl">Follows</span>
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
          <User size={20} />
          <span className="text-xl">Profile</span>
        </NavLink>
        <CreatePostModal />
      </div>

      <Button className="px-10 py-2" onClick={handleLogout}>
        <TbLogout2 size={20} className="dark:text-white" />
        <span className="dark:text-white"> Log Out</span>
      </Button>
    </div>
  );
}

export default Navigation;
