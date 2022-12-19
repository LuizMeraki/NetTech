import { useState } from "react";
import { IUserData } from '../interfaces/UserData';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { useAuthContext } from '../hooks/useAuthContext';
import axios from "axios";


const API = import.meta.env.VITE_API;


export const fetchUserData = () => {

  const { token } = useAuthContext();

  const [userData, setUserData] = useState<IUserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  async function getUserData(userID: string) {

    setLoading(true);
    setError(null);

    try {

      const response: any = await axios.get(`${API}/user/getuserbyid?userId=${userID}`, {
        headers: {
          "Authorization": token,
          "Access-Control-Allow-Origin": "*"
        }
      });

      setUserData(response);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);

    }

    setLoading(false);
  }

  return ({ getUserData, userData, loading, error });
}