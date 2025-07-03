import { createBrowserRouter } from 'react-router-dom';
import AuthLogin from '../Layouts/auth/AuthLogin';
import AuthRegister from '../Layouts/auth/AuthRegister';
import Beranda from './Beranda';

import Layout from '@/Layouts/Layout';
import DetailTweet from './DetailTweet';
import Follows from './Follows';
import ForgotPassword from '../Layouts/auth/ForgotPassword';
import Profile from './Profile';
import ProfileUser from './ProfileUser';
import ProtectedRoute from './ProtectedRoute';
import Search from '../features/search/Search';
import Status from './Status';
import AuthLayout from '@/Layouts/AuthLayout';

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
            path: '/status',
            Component: Status,
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
    ],
  },
]);
export default router;
