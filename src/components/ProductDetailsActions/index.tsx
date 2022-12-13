import { useState, useEffect } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { favoriteProduct } from "../../utils/favoriteProduct";
import { productData } from '../../interfaces/Products';
import { useAuthContext } from '../../hooks/useAuthContex';
import { useNavigate } from 'react-router-dom';
import styles from "./style.module.css";


interface Props {
  userID: string;
  productID: string | undefined;
  favoritedProducts: productData[] | null;
}

const productFavorited = `${styles.productFavorited}`;
const unfavoriteProduct = `${styles.unfavoriteProduct}`;

const productInCart = `${styles.productInCart}`;
const productNotInCart = `${styles.productNotInCart}`;


export const ProductDetailsActions = ({ userID, productID, favoritedProducts }: Props) => {

  const { token } = useAuthContext();
  const navigate = useNavigate();

  const [isProductAlreadyFavorited, setIsProductAlreadyFavorited] = useState<boolean>(false);
  const [isProductAlreadyInCart, setIsProductAlreadyInCart] = useState<boolean>(false);

  function handleFavoriteActions() {

    if (!token) { navigate("/login"); return };

    favoriteProduct(userID, productID);
    setIsProductAlreadyFavorited((prevState) => !prevState);
  }

  function handleCartActions() {

    if (!token) { navigate("/login"); return };

    setIsProductAlreadyInCart((prevState) => !prevState);
  }

  useEffect(() => {

    favoritedProducts?.forEach((product) => {
      product.productId?.toString() == productID &&
        setIsProductAlreadyFavorited(true);
    })

  }, [favoritedProducts]);


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