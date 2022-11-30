import { useState } from 'react';
import { IFormData } from '../interfaces/FormData';
import { useNavigate } from 'react-router-dom';
import { requestErrorMessages } from '../constants/requestErrorMessages';
import axios from 'axios';


const API = import.meta.env.VITE_API;


export const useLogin = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  async function loginUser(data: IFormData) {

    setLoading(true);
    setError(null);

    const passwordLength = data.password.length < 8;

    try {

      if (passwordLength) {
        throw requestErrorMessages.passwordLength;
      }

      await axios.post(`${API}/user/loginuser`, data);

    } catch (error: any) {

      setLoading(false);

      if (error == requestErrorMessages.passwordLength) {
        setError(error)
        return;

      } else if (error.response.data == requestErrorMessages.emailNotRegistered) {
        setError(requestErrorMessages.emailNotRegistered);
        return;

      } else if (error.response.data == requestErrorMessages.incorrectPassword) {
        setError(requestErrorMessages.incorrectPassword)
        return;

      } else {
        setError(requestErrorMessages.genericError);
        return;
      };
    }

    setLoading(false);
    navigate("/");
  }

  return ({ loginUser, loading, error });
}