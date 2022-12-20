import { useState } from "react";
import { UserDataType } from '../interfaces/UserData';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { useAuthContext } from '../hooks/useAuthContext';
import { getLocalStorageItem } from '../utils/localStorageActions';
import { api } from "./api";


export const fetchUserDataService = () => {

  const userID = getLocalStorageItem("id");

  const { token } = useAuthContext();
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  async function getUserData(userIDs: string) {

    setLoading(true);
    setError(null);

    try {

      const response: any = await api.get(`user/getuserbyid?userId=${userID}`, {
        headers: {
          "Authorization": token,
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