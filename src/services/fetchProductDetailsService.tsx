import { useState } from 'react';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { ProductDataType } from '../interfaces/Products';
import { useAuthContext } from '../hooks/useAuthContext';
import { favoriteProductService } from './favoriteProductService';
import { cartProductService } from './cartProductService';
import { api } from './api';


export const fetchProductDetailsService = () => {

  const { token } = useAuthContext();

  const { fetchFavoriteProducts, favoriteProducts } = favoriteProductService();
  const { fetchProductsOnCart, productsOnCart } = cartProductService();

  const [productDetails, setProductDetails] = useState<ProductDataType | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  async function fetchProductDetails(id: string | undefined) {

    setLoading(true);
    setError(null);

    try {

      const request = await api.get(`/product/getproductbyid?productId=${id}`);

      if (token) {

        await fetchFavoriteProducts();
        await fetchProductsOnCart();
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