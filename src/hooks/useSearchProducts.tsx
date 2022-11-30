import { useState } from "react";
import { IProductsData } from '../interfaces/Products';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useSearchProducts = () => {

  const [products, setProducts] = useState<IProductsData | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function searchProducts(query: string) {

    setLoading(true);
    setError(null);

    const formattedQuery = query.toUpperCase();

    try {

      const request = await axios.get(`${API}/product/filterproductbyname?productName=${formattedQuery}`);

      setProducts(request);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  return ({ searchProducts, products, loading, error });
}