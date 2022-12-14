import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageItem } from './../../utils/localStorageActions';


interface Props {
  redirectTo: string;
}


export const PrivateRoute = ({ redirectTo }: Props) => {

  const storageValue = getLocalStorageItem("token");

  return (
    storageValue ? (
      <Outlet />
    ) : (
      <Navigate to={redirectTo} />
    )
  )
}