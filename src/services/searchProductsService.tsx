import { useState } from "react";
import { ProductsDataType } from '../interfaces/Products';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { api } from "./api";


export const searchProductsService = () => {

  const [products, setProducts] = useState<ProductsDataType | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function searchProducts(query: string) {

    setLoading(true);
    setError(null);

    const formattedQuery = query.toUpperCase();

    try {

      const request = await api.get(`product/filterproductbyname?productName=${formattedQuery}`);

      setProducts(request);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  return ({ searchProducts, products, loading, error });
}