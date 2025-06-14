import { createBrowserRouter } from "react-router-dom";
import AuthLogin from "./AuthLogin";
import AuthRegister from "./AuthRegister";
import Beranda from "./Beranda";

import Follows from "./Follows";
import ForgotPassword from "./ForgotPassword";
import MediaProfile from "./MediaProfile";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import Search from "./Search";
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
]);
export default router;
