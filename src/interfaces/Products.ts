import { Data } from "./Commets";


export type productDataType = {
  productId?: number;
  productName: string;
  productPrice?: number;
  productCategory?: string;
  productImageUrl?: string;
  productDescription?: string;
  posts?: Data[];
}

export interface IProductsData {
  data: productDataType[];
}

export interface IProductData {
  data: productDataType;
}