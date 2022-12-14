import { useState } from "react";
import { productData } from '../interfaces/Products';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useAddProduct = () => {

  const { token } = useAuthContext();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function addProduct(data: productData) {

    setLoading(true);
    setError(null);

    try {

      await axios.post(`${API}/product/createproduct`, data, {
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