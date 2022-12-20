import { ProductType } from './Products';


type AuthoritiesType = {
  authority: string;
}

export type DataType = {
  authorities: AuthoritiesType[];
  username: string;
  favoriteProducts: ProductType[];
}

export type UserDataType = {
  data: DataType;
}