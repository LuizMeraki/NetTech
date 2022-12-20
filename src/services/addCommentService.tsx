import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { requestErrorMessages } from '../constants/requestErrorMessages';
import { api } from './api';


export const addCommentService = () => {

  const { token } = useAuthContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function addComment(data: object, userID: string, productID: string | undefined) {

    setLoading(true);
    setError(null);

    try {

      await api.post(`post/createpost?userId=${userID}&productId=${productID}`,
        data,
        {
          headers: {
            "Authorization": token,
          },
        }
      );

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false)
  }

  return ({ addComment, loading, error })
}