import { useAuthLogin } from '@/stores/authLogin';
import { PiSpinner } from 'react-icons/pi';
import { Navigate, Outlet } from 'react-router-dom';

function AuthLayout() {
  const { token, _hasHydrated } = useAuthLogin();
  if (!_hasHydrated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PiSpinner className="animate-spin text-green-700" size={30} />
      </div>
    );
  }
  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default AuthLayout;
