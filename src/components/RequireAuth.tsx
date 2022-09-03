import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

type Props = {};

const RequireAuth = (props: Props) => {
  const location = useLocation();
  const { isAuthorize } = useAuthStore();

  if (!isAuthorize()) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
