import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';


interface Props {
  redirectTo: string;
}


export const PrivateRoute = ({ redirectTo }: Props) => {

  const { token } = useAuthContext();

  return (
    token ?
      <Outlet />
      : <Navigate to={redirectTo} />
  )
}