import { productDataType } from './Products';


type authoritiesType = {
  authority: string;
}

export type UserDataType = {
  authorities: authoritiesType[];
  username: string;
  favoriteProducts: productDataType[];
}

export interface IUserData {
  data: UserDataType;
}