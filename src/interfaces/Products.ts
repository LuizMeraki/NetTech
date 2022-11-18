export interface IData {
  productId?: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  productDescription?: string;
}

export interface IProductsData {
  data: IData[];
}

export interface IProductData {
  data: IData;
}