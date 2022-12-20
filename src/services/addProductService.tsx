import { useState } from "react";
import { ProductType } from '../interfaces/Products';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { useAuthContext } from "../hooks/useAuthContext";
import { api } from "./api";


export const addProductService = () => {

  const { token } = useAuthContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function addProduct(data: ProductType) {

    setLoading(true);
    setError(null);

    try {

      await api.post(`product/createproduct`, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Authorization": token
        }
      });

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  return ({ addProduct, loading, error })
}