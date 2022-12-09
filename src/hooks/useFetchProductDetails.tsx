import { useState, useEffect } from 'react';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { IProductData, productData } from '../interfaces/Products';
import { useFecthUserData } from './useFetchUserData';
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useFetchProductDetails = () => {

  const { fetchUserData, userData } = useFecthUserData();

  const [productDetails, setProductDetails] = useState<IProductData | null>(null);
  const [favoritedProducts, setFavoritedProducts] = useState<productData[] | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProductDetails(id: string | undefined) {

    setLoading(true);
    setError(null);

    try {

      const request = await axios.get(`${API}/product/getproductbyid?productId=${id}`);
      await fetchUserData("1");

      setProductDetails(request);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  useEffect(() => {

    userData && setFavoritedProducts(userData.data.favoriteProducts);

  }, [userData]);

  return ({ fetchProductDetails, productDetails, favoritedProducts, loading, error });
}