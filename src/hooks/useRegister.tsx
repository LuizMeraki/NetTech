import { useState } from "react";
import { data } from "../components/RegisterForm/";


export const useRegister = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  function registerUser(data: data) {

    setLoading(true);
    setError(null);

    const arePasswordEquals = data.createPassword !== data.confirmPassword;
    const passwordLength = data.createPassword.length < 8;

    try {

      if (arePasswordEquals) {
        throw "As senhas devem ser iguais.";
      } else if (passwordLength) {
        throw "A senha deve conter no mínimo 8 caracteres.";
      }

    } catch (error: any) {
      setError(error);
      setLoading(false);
    }

    setLoading(false);
  }

  return ({ registerUser, loading, error });
}