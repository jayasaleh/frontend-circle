import { useCurrentUser } from "@/hooks/useCurrentUser";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { data: user, isLoading, isError } = useCurrentUser();

  if (isLoading) {
    return <div>Waiting...</div>;
  }

  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
