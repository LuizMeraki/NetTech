import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { IProductsData } from "../interfaces/Products";
import { requestErrorMessages } from "../constants/requestErrorMessages";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useCartProduct = () => {

  const { token } = useAuthContext();

  const [productsOnCart, setProductsOnCart] = useState<IProductsData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  function addProductOnCart(userID: string, productID: string | undefined) {

    try {

      axios.post(`${API}/user/addproducttocartlist?userId=${userID}&productId=${productID}`, {}, {
        headers: {
          "Authorization": token,
          "Access-Control-Allow-Origin": "*",
        }
      });

    } catch (error) { }
  }


  function removeProductFromCart(userID: string, productID: string | undefined) {

    try {

      axios.delete(`${API}/user/deleteproductfromcartlist?userId=${userID}&productId=${productID}`, {
        headers: {
          "Authorization": token,
          "Access-Control-Allow-Origin": "*",
        }
      });

    } catch (error) { }

  }


  async function fetchProductsOnCart(userID: string) {

    setLoading(true);
    setError(null);

    try {

      const response: any = await axios.get(`${API}/user/getcartlistfromuser?userId=${userID}`, {
        headers: {
          "Authorization": token,
          "Access-Control-Allow-Origin": "*",
        }
      });

      setProductsOnCart(response);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);

    }

    setLoading(false);
  }


  return ({
    addProductOnCart,
    removeProductFromCart,
    fetchProductsOnCart,
    productsOnCart,
    loading,
    error
  });
}