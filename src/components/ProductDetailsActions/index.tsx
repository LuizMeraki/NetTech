import { useState } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { favoriteProduct } from "../../utils/favoriteProduct";
import styles from "./style.module.css";


interface Props {
  userID: string;
  productID: string | undefined;
}

const productFavorited = `${styles.productFavorited}`;
const unfavoriteProduct = `${styles.unfavoriteProduct}`;

const productInCart = `${styles.productInCart}`;
const productNotInCart = `${styles.productNotInCart}`;


export const ProductDetailsActions = ({ userID, productID }: Props) => {

  const [isProductAlreadyFavorited, setIsProductAlreadyFavorited] = useState<boolean>(false);
  const [isProductAlreadyInCart, setIsProductAlreadyInCart] = useState<boolean>(false);

  function handleFavoriteActions() {
    favoriteProduct(userID, productID);
    setIsProductAlreadyFavorited((prevState) => !prevState);
  }

  function handleCartActions() {
    setIsProductAlreadyInCart((prevState) => !prevState);
  }


  return (
    <div className={`${styles.container} max-width`}>
      <p>Product details</p>
      <div className={styles.actions}>
        <button
          className={isProductAlreadyFavorited ? productFavorited : unfavoriteProduct}
          onClick={handleFavoriteActions}
        >
          <AiOutlineHeart />
        </button>
        <button
          className={isProductAlreadyInCart ? productInCart : productNotInCart}
          onClick={handleCartActions}
        >
          <HiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
}