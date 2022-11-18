import { useState, useEffect } from "react";
import { IProductsData } from '../interfaces/Products';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useFetchProducts = () => {

  const [products, setProducts] = useState<IProductsData | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProducts() {

    setLoading(true);
    setError(null);

    try {

      const fetch: any = await axios.get(`${API}/getallproducts`);

      setProducts(fetch);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  useEffect(() => {

    fetchProducts();

  }, []);

  return ({ products, loading, error })
}