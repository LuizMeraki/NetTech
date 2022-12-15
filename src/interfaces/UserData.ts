import { productDataType } from './Products';


export type UserDataType = {
  favoriteProducts: productDataType[];
}

export interface IUserData {
  data: UserDataType;
}