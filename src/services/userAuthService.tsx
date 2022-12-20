import { useState } from 'react';
import { FormDataType } from '../interfaces/FormData';
import { useNavigate } from 'react-router-dom';
import { requestErrorMessages } from '../constants/requestErrorMessages';
import { useAuthContext } from '../hooks/useAuthContext';
import { setLocalStorageItem } from '../utils/localStorageActions';
import { api } from "./api";


export const userAuthService = () => {

  const navigate = useNavigate();
  const { setToken } = useAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  async function registerUser(data: FormDataType, confirmPassword: string) {

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

      const response: any = await api.post(`user/createuser`, data);

      if (response) {

        setToken(response.data.token);
        setLocalStorageItem("token", response.data.token);
        setLocalStorageItem("id", response.data.id);

      }

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


  async function loginUser(data: FormDataType) {

    setLoading(true);
    setError(null);

    const passwordLength = data.password.length < 8;

    try {

      if (passwordLength) {
        throw requestErrorMessages.passwordLength;
      }

      const response: any = await api.post(`user/loginuser`, data);

      if (response) {

        setToken(response.data.token);
        setLocalStorageItem("token", response.data.token);
        setLocalStorageItem("id", response.data.id);

      }

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


  function logoutUser() {

    localStorage.removeItem("token");
    localStorage.removeItem("id");

    setToken(null);
    navigate("/home");

  }


  return ({
    registerUser,
    loginUser,
    logoutUser,
    loading,
    error
  });
}