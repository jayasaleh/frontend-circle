import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";
import Beranda from "./Beranda";

import ForgotPassword from "./ForgotPassword";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./Profile";
import Search from "./Search";
import Follows from "./Follows";
import MediaProfile from "./MediaProfile";
import Status from "./Status";

let router = createBrowserRouter([
  {
    Component: ProtectedRoute,
    children: [
      {
        path: "/",
        Component: Beranda,
      },

      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/media-profile",
        Component: MediaProfile,
      },
      {
        path: "/search",
        Component: Search,
      },
      {
        path: "/follows",
        Component: Follows,
      },
      {
        path: "/status",
        Component: Status,
      },
    ],
  },

  {
    path: "/login",
    Component: AuthLogin,
  },
  {
    path: "/register",
    Component: AuthRegister,
  },
  {
    path: "/forgotpassword",
    Component: ForgotPassword,
  },
  {
    path: "/tes",
    Component: Home,
  },
]);
export default router;
