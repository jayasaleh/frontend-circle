import { useAuthLogin } from '@/stores/authLogin';
import { Navigate, Outlet } from 'react-router-dom';
import { ImSpinner5 } from 'react-icons/im';
function ProtectedRoute() {
  const { token, _hasHydrated } = useAuthLogin();
  if (!_hasHydrated) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <ImSpinner5
          size={30}
          className="animate-spin duration-[1500ms] text-green-700"
        />
      </div>
    );
  }
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
