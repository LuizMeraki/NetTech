import { useState } from 'react';
import { IFormData } from '../interfaces/FormData';


export const useLogin = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function loginUser(data: IFormData) {

    setLoading(true);
    setError(null);

    try {



    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
    
    setLoading(false); 
  }

  return ({ loginUser, loading, error });
}