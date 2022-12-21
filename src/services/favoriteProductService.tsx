import { useState } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";
import { ProductsDataType } from '../interfaces/Products';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { getLocalStorageItem } from '../utils/localStorageActions';
import { api } from './api';


export const favoriteProductService = () => {

  const userID = getLocalStorageItem("id");
  
  const { token } = useAuthContext();
  const [favoriteProducts, setFavoriteProducts] = useState<ProductsDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  function favoriteProduct(productID: string | undefined) {

    try {

      api.post(`user/addproducttofavoritelist?userId=${userID}&productId=${productID}`, {}, {
        headers: {
          "Authorization": token,
        }
      });

    } catch (error) { }
  }


  function removeFavoriteProduct(productID: string | undefined) {

    try {

      api.delete(`user/deleteproductfromwishlist?userId=${userID}&productId=${productID}`, {
        headers: {
          "Authorization": token,
        }
      });

    } catch (error) { }
  }


  async function fetchFavoriteProducts() {

    setLoading(true);
    setError(null);

    try {

      const response: any = await api.get(`user/getwishlistfromuser?userId=${userID}`, {
        headers: {
          "Authorization": token,
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