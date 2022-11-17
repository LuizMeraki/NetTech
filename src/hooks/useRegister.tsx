import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IFormData } from '../interfaces/FormData';
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useRegister = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  async function registerUser(data: IFormData, confirmPassword: string) {

    setLoading(true);
    setError(null);

    const arePasswordEquals = data.password !== confirmPassword;
    const passwordLength = data.password && data.password.length < 8;

    try {

      if (arePasswordEquals) {
        throw "Passwords must be the same.";
      } else if (passwordLength) {
        throw "Password must contain at least 8 characters.";
      }

      await axios.post(`${API}/createuser`, data);

    } catch (error: any) {

      setLoading(false);

      if (error == "Passwords must be the same.") {
        setError(error);
        return;
      } else if (error == "Password must contain at least 8 characters.") {
        setError(error);
        return;
      } else if (error.response.data == "Usuário já tem um cadastro") {
        setError("E-mail already registered.")
        return;
      } else {
        setError("An error occurred, check your credentials or try again later.");
        return;
      };
    }

    setLoading(false);
    navigate("/login");
  }

  return ({ registerUser, loading, error });
}