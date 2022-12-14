import { useState } from "react";
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { IUserData } from "../interfaces/UserData";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useFecthUserData = () => {

  const { token } = useAuthContext();

  const [userData, setUserData] = useState<IUserData | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchUserData(id: string) {

    setLoading(true);

    try {

      const request: any = await axios.get(`${API}/user/getuserbyid?userId=${id}`, {
        headers: {
          "Authorization": token,
          "Access-Control-Allow-Origin": "*",
        },
      });

      setUserData(request);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  return ({ fetchUserData, userData, loading, error });
}