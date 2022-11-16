import { useState } from "react";


export const useRegister = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  function registerUser(data: object) {

    setLoading(true);
    setError(null);

    try {



    } catch (error) {


      setLoading(false);
    }

    setLoading(false);
  }

  return ({ registerUser, loading, error });
}