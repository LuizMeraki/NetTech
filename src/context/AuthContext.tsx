import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";


interface Props {
  children: JSX.Element;
}

type AuthContextType = {
  token: null | string;
  setToken: Dispatch<SetStateAction<null | string>>;
}


export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {

  const [token, setToken] = useState<null | string>("true");


  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}