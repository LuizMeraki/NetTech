import { useState } from 'react';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { IProductData } from '../interfaces/Products';
import { useAuthContext } from './useAuthContext';
import { useFavoriteProduct } from './useFavoriteProduct';
import { useCartProduct } from './useCartProduct';
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useFetchProductDetails = () => {

  const { token } = useAuthContext();

  const { fetchFavoriteProducts, favoriteProducts } = useFavoriteProduct();
  const { fetchProductsOnCart, productsOnCart } = useCartProduct();

  const [productDetails, setProductDetails] = useState<IProductData | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  async function fetchProductDetails(id: string | undefined) {

    setLoading(true);
    setError(null);

    try {

      const request = await axios.get(`${API}/product/getproductbyid?productId=${id}`);

      if (token) {

        await fetchFavoriteProducts("1");
        await fetchProductsOnCart("1");
      }

      setProductDetails(request);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  
  return ({
    fetchProductDetails,
    productDetails,
    favoriteProducts,
    productsOnCart,
    loading,
    error
  });
}