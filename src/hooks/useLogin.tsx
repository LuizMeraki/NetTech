import { useState } from 'react';
import { IFormData } from '../interfaces/FormData';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const API = import.meta.env.VITE_API;

const requestErrors = {
  emailNotRegistered: "E-mail not registered.",
  incorrectPassword: "Incorrect password",
  passwordLength: "Password must contain at least 8 characters.",
  genericError: "An error occurred, check your credentials or try again later.",
}


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
        throw requestErrors.passwordLength;
      }

      await axios.post(`${API}/loginuser`, data);

    } catch (error: any) {

      setLoading(false);

      if (error == requestErrors.passwordLength) {
        setError(error)
        return;

      } else if (error.response.data == requestErrors.emailNotRegistered) {
        setError(requestErrors.emailNotRegistered);
        return;

      } else if (error.response.data == requestErrors.incorrectPassword) {
        setError(requestErrors.incorrectPassword)
        return;

      } else {
        setError(requestErrors.genericError);
        return;
      };
    }

    setLoading(false);
    navigate("/");
  }

  return ({ loginUser, loading, error });
}