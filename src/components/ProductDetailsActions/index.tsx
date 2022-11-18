import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import styles from "./style.module.css";


export const ProductDetailsActions = () => {
  return (
    <div className={`${styles.container} max-width`}>
      <p>Product details</p>
      <div className={styles.actions}>
        <button className={styles.favorite}>
          <AiOutlineHeart />
        </button>
        <button className={styles.cart}>
          <HiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
}