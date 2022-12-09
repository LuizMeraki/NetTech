import { productData } from './Products';


export type UserDataType = {
  favoriteProducts: productData[];
}

export interface IUserData {
  data: UserDataType;
}