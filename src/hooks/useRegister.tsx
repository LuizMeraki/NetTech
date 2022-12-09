import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IFormData } from '../interfaces/FormData';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useRegister = () => {

  const { setToken } = useAuthContext();

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
        throw requestErrorMessages.differentPasswords;
      } else if (passwordLength) {
        throw requestErrorMessages.passwordLength;
      }

      await axios.post(`${API}/user/createuser`, data);

    } catch (error: any) {

      setLoading(false);

      if (error == requestErrorMessages.differentPasswords) {
        setError(error)
        return;
      } else if (error == requestErrorMessages.passwordLength) {
        setError(error)
        return;
      } else if (error.response.data == requestErrorMessages.emailAlreadyExists) {
        setError(requestErrorMessages.emailAlreadyExists)
        return;
      } else {
        setError(requestErrorMessages.genericError);
        return;
      };
    }

    setLoading(false);
    navigate("/");
  }

  return ({ registerUser, loading, error });
}