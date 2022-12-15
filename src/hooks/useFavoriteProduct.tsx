import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";
import { IProductsData } from '../interfaces/Products';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useFavoriteProduct = () => {

  const { token } = useAuthContext();

  const [favoriteProducts, setFavoriteProducts] = useState<IProductsData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  function favoriteProduct(userID: string, productID: string | undefined) {

    try {

      axios.post(`${API}/user/addproducttofavoritelist?userId=${userID}&productId=${productID}`, {}, {
        headers: {
          "Authorization": token,
          "Access-Control-Allow-Origin": "*",
        }
      });

    } catch (error) { }
  }


  function removeFavoriteProduct(userID: string, productID: string | undefined) {

    try {

      axios.delete(`${API}/user/deleteproductfromwishlist?userId=${userID}&productId=${productID}`, {
        headers: {
          "Authorization": token,
          "Access-Control-Allow-Origin": "*",
        }
      });

    } catch (error) { }
  }


  async function fetchFavoriteProducts(userID: string) {

    setLoading(true);
    setError(null);

    try {

      const response: any = await axios.get(`${API}/user/getwishlistfromuser?userId=${userID}`, {
        headers: {
          "Authorization": token,
          "Access-Control-Allow-Origin": "*",
        }
      });

      setFavoriteProducts(response);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);

    }

    setLoading(false);
  }


  return ({
    favoriteProduct,
    removeFavoriteProduct,
    fetchFavoriteProducts,
    favoriteProducts,
    loading,
    error
  });

}