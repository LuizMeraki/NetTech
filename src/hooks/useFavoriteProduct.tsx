import { useAuthContext } from "../hooks/useAuthContex";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useFavoriteProduct = () => {

  const { token } = useAuthContext();

  function favoriteProduct(userID: string, productID: string | undefined) {

    axios.post(`${API}/user/addproducttofavoritelist?userId=${userID}&productId=${productID}`, {}, {
      headers: {
        "Authorization": token,
        "Access-Control-Allow-Origin": "*",
      }
    });
  }
  

  function removeFavoriteProduct(userID: string, productID: string | undefined) {

    axios.delete(`${API}/user/deleteproductfromwishlist?userId=${userID}&productId=${productID}`, {
      headers: {
        "Authorization": token,
        "Access-Control-Allow-Origin": "*",
      }
    });

  }

  return ({ favoriteProduct, removeFavoriteProduct });

}