import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { favoriteProduct } from "../../utils/favoriteProduct";
import styles from "./style.module.css";


interface Props {
  userID: string;
  productID: string | undefined;
}


export const ProductDetailsActions = ({ userID, productID }: Props) => {
  return (
    <div className={`${styles.container} max-width`}>
      <p>Product details</p>
      <div className={styles.actions}>
        <button className={styles.favorite} onClick={() => favoriteProduct(userID, productID)}>
          <AiOutlineHeart />
        </button>
        <button className={styles.cart}>
          <HiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
}