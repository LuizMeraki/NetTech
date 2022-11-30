import { productData } from './Products';


type userData = {
  favoriteProducts: productData[];
}

export interface IUserData {
  data: userData;
}