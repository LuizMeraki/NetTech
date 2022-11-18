import { useState } from "react";
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { IProductsData } from "../interfaces/Products";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useFetchProductDetails = () => {

  const [productDetails, setProductDetails] = useState<IProductsData | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProductDetails(id: string | undefined) {

    setLoading(true);
    setError(null);

    try {

      const request = await axios.get(`${API}/getproductbyid/${id}`);

      setProductDetails(request);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  return ({ fetchProductDetails, productDetails, loading, error });
}