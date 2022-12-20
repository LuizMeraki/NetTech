import { useState, useEffect } from "react";
import { ProductsWithCategoryType } from '../interfaces/Products';
import { requestErrorMessages } from "../constants/requestErrorMessages";
import { api } from "./api";


export const fetchProductsService = () => {

  const [products, setProducts] = useState<ProductsWithCategoryType | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchProducts() {

    setLoading(true);
    setError(null);

    try {

      const response: any = await api.get(`category/getallcategories`);

      setProducts(response);

    } catch (error) {

      setLoading(false);
      setError(requestErrorMessages.genericError);
    }

    setLoading(false);
  }

  useEffect(() => {

    fetchProducts();

  }, []);

  return ({ products, loading, error })
}