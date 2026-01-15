import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../stores/authStore";
export default function AuthMiddleware() {
  const { pathname } = useLocation();
  const token = useAuth((state) => state.token);
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={`/login?continue=${pathname}`} replace />
  );
}
