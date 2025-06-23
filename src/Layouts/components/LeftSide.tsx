import CreatePostModal from "@/components/CreatePostModal";
import { Button } from "@/components/ui/button";
import { ButtonTheme } from "@/components/ui/buttonTheme";
import { useAuthLogin } from "@/stores/authLogin";
import { Heart, Home, Search, User } from "lucide-react";
import { TbLogout2 } from "react-icons/tb";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuthLogin();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className=" p-4 sticky top-0 flex flex-col justify-between h-screen ">
      <div className="space-y-7 h-full">
        <h2 className="text-4xl font-bold mb-4 text-green-600">Circle</h2>
        <Link
          to="/"
          className={`flex items-center gap-2 hover:underline hover:text-green-600 hover:font-bold ${
            location.pathname === "/" ? "text-green-600 font-bold" : ""
          }`}
        >
          <Home size={20} />
          <span className="text-lg">Home</span>
        </Link>
        <Link
          to="/search"
          className={`flex items-center gap-2 hover:underline hover:text-green-600 hover:font-bold ${
            location.pathname === "/search" ? "text-green-600 font-bold" : ""
          }`}
        >
          <Search size={20} />
          <span className="text-lg">Search</span>
        </Link>
        <Link
          to="/follows"
          className={`flex items-center gap-2 hover:underline hover:text-green-600 hover:font-bold ${
            location.pathname === "/follows" ? "text-green-600 font-bold" : ""
          }`}
        >
          <Heart size={20} />
          <span className="text-lg">Follows</span>
        </Link>
        <Link
          to="/profile"
          className={`flex items-center gap-2 hover:underline hover:text-green-600 hover:font-bold ${
            location.pathname === "/profile" ||
            location.pathname === "/media-profile"
              ? "text-green-600 font-bold"
              : ""
          }`}
        >
          <User size={20} />
          <span className="text-lg">Profile</span>
        </Link>
        <CreatePostModal />
      </div>
      <div className="flex  justify-evenly">
        <ButtonTheme />
        <Button className="" onClick={handleLogout} variant="outline">
          <TbLogout2 size={20} className="dark:text-white" />
          <span className="dark:text-white"> Log Out</span>
        </Button>
      </div>
    </div>
  );
}

export default Navigation;
