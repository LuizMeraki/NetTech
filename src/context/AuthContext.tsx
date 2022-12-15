import {
  createContext,
  Dispatch,
  SetStateAction,
  useState
} from "react";

import { getLocalStorageItem } from "../utils/localStorageActions";

interface Props {
  children: JSX.Element;
}

type AuthContextType = {
  token: null | string;
  setToken: Dispatch<SetStateAction<null | string>>;
}


export const AuthContext = createContext<AuthContextType>({} as AuthContextType);


export const AuthContextProvider = ({ children }: Props) => {

  const [token, setToken] = useState<null | string>(null);

  if (!token) {

    const storageValue = getLocalStorageItem("token");
    storageValue && setToken(storageValue);

  }


  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}