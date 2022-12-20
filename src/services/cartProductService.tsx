import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { ProductsDataType } from "../interfaces/Products";
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { api } from "./api";


export const cartProductService = () => {

  const { token } = useAuthContext();

  const [productsOnCart, setProductsOnCart] = useState<ProductsDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  function addProductOnCart(userID: string, productID: string | undefined) {

    try {

      api.post(`user/addproducttocartlist?userId=${userID}&productId=${productID}`, {}, {
        headers: {
          "Authorization": token,
        }
      });

    } catch (error) { }
  }


  function removeProductFromCart(userID: string, productID: string | undefined) {

    try {

      api.delete(`user/deleteproductfromcartlist?userId=${userID}&productId=${productID}`, {
        headers: {
          "Authorization": token,
        }
      });

    } catch (error) { }

  }


  async function fetchProductsOnCart(userID: string) {

    setLoading(true);
    setError(null);

    try {

      const response: any = await api.get(`user/getcartlistfromuser?userId=${userID}`, {
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