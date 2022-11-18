import { useState } from "react";
import { IData } from '../interfaces/Products';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useAddProduct = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function addProduct(data: IData) {

    setLoading(true);
    setError(null);

    try {

      await axios.post(`${API}/createproduct`, data);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  return ({ addProduct, loading, error })
}