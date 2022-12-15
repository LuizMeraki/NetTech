import { useAuthContext } from "../hooks/useAuthContex";
import axios from "axios";


const API = import.meta.env.VITE_API;


export const useFavoriteProduct = () => {

  const { token } = useAuthContext();


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

  return ({ favoriteProduct, removeFavoriteProduct });

}