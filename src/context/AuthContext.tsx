import { createContext, Dispatch, SetStateAction, useState } from "react";


interface Props {
  children: JSX.Element;
}

type AuthContextType = {
  token: null | string,
  setToken: Dispatch<SetStateAction<string | null>>,
}


export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: Props) => {

  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}