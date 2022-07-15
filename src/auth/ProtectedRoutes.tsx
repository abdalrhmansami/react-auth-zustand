import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/Store";

type userType = { user: { loggedIn: boolean } };

const useAuth = () => {
  const user = useAuthStore((state: userType) => state.user);
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
