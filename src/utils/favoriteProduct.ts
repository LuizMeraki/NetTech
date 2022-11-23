import axios from "axios";


const API = import.meta.env.VITE_API;


export function favoriteProduct(userID: string, productID: string | undefined) {

  const headers = {
    headers: {
      Authorization: "",
    }
  };

  axios.post(`${API}/`, {});
}