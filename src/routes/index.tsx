import { createBrowserRouter } from 'react-router-dom';
import AuthLogin from '../Layouts/auth/Login/AuthLogin';
import AuthRegister from '../Layouts/auth/Register/AuthRegister';
import Beranda from '../features/home/Beranda';

import Layout from '@/Layouts/Layout';
import DetailTweet from '../features/home/DetailTweet';
import Follows from '../features/follow/Follows';
import ForgotPassword from '../Layouts/auth/ForgotPassword/ForgotPassword';
import Profile from '../features/profile/Profile';
import ProfileUser from '../features/profile/ProfileUser';
import ProtectedRoute from './ProtectedRoute';
import Search from '../features/search/Search';
import AuthLayout from '@/Layouts/AuthLayout';
import ResetPassword from '@/Layouts/auth/ResetPassword/ResetPassword';

let router = createBrowserRouter([
  {
    Component: ProtectedRoute,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            Component: Beranda,
          },
          {
            path: '/detail/:id',
            Component: DetailTweet,
          },
          {
            path: '/profile',
            Component: Profile,
          },

          {
            path: '/search',
            Component: Search,
          },
          {
            path: '/follows',
            Component: Follows,
          },

          {
            path: '/profile/:id',
            Component: ProfileUser,
          },
        ],
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: AuthLogin,
      },
      {
        path: '/register',
        Component: AuthRegister,
      },
      {
        path: '/forgotpassword',
        Component: ForgotPassword,
      },
      {
        path: '/reset-password/:token',
        Component: ResetPassword,
      },
    ],
  },
]);
export default router;
