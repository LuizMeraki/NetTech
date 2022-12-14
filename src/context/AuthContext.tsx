import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from "react";

import { getLocalStorageItem, setLocalStorageItem } from "../utils/localStorageActions";

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

  useEffect(() => {

    setLocalStorageItem("token", token);

    if (!token) {

      const storageValue = getLocalStorageItem("token");
      storageValue && setToken(storageValue);

    }

  }, [token]);


  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}