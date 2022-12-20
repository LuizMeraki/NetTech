export type ProductType = {
  productId?: number;
  productName: string;
  productPrice?: number;
  productCategory?: string;
  productImageUrl?: string;
  productDescription?: string;
  posts?: string[];
}

export type DataType = {
  categoryName: string;
  products: ProductType[];
}

export type ProductsWithCategoryType = {
  data: DataType[];
}

export type ProductsDataType = {
  data: ProductType[];
}

export type ProductDataType = {
  data: ProductType;
}