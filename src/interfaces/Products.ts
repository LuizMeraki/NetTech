import { Data } from "./Commets";


export type productData = {
  productId?: number;
  productName: string;
  productPrice?: number;
  productImageUrl?: string;
  productDescription?: string;
  posts?: Data[];
}

export interface IProductsData {
  data: productData[];
}

export interface IProductData {
  data: productData;
}