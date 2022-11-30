import { useState } from 'react';
import { requestErrorMessages } from './../constants/requestErrorMessages';
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useAddComment = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function addComment(data: object, userID: string, productID: string | undefined) {

    setLoading(true);
    setError(null);

    try {

      await axios.post(`${API}/post/createpost?userId=${userID}&productId=${productID}`, data);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false)
  }

  return ({ addComment, loading, error })
}