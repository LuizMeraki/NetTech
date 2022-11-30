import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';


export const PrivateRoute = () => {

  const { token } = useAuthContext();

  return (
    true ?
      <Outlet />
      : <Navigate to="/login" />
  )
}