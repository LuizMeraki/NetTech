import { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { IProductsData } from '../interfaces/Products';
import axios from 'axios';


const API = import.meta.env.VITE_API;


export const useFetchFavoriteProducts = (userID: string) => {

  const { token } = useAuthContext();

  const [favoriteProducts, setFavoriteProducts] = useState<IProductsData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  async function fetchFavoriteProducts() {

    setLoading(true);
    setError(null);

    try {

      const response: any = await axios.get(`${API}/user/getwishlistfromuser?userId=${userID}`, {
        headers: {
          "Authorization": token,
          "Access-Control-Allow-Origin": "*",
        }
      });

      response && setFavoriteProducts(response);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);

    }

    setLoading(false);
  }


  useEffect(() => {

    fetchFavoriteProducts();

  }, []);


  return ({ favoriteProducts, loading, error });

}