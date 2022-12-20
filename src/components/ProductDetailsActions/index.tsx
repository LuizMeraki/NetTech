import { useState, useEffect } from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { favoriteProductService } from "../../services/favoriteProductService";
import { cartProductService } from '../../services/cartProductService';
import { productsDataType } from '../../interfaces/Products';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import styles from "./style.module.css";


interface Props {
  userID: string;
  productID: string | undefined;
  favoriteProducts: productsDataType | null;
  productsOnCart: productsDataType | null;
}

const productFavorited = `${styles.productFavorited}`;
const unfavoriteProduct = `${styles.unfavoriteProduct}`;

const productOnCart = `${styles.productOnCart}`;
const productNotOnCart = `${styles.productNotOnCart}`;


export const ProductDetailsActions = ({ userID, productID, favoriteProducts, productsOnCart }: Props) => {

  const { token } = useAuthContext();
  const navigate = useNavigate();

  const { favoriteProduct, removeFavoriteProduct } = favoriteProductService();
  const { addProductOnCart, removeProductFromCart } = cartProductService();

  const [isProductAlreadyFavorited, setIsProductAlreadyFavorited] = useState<boolean>(false);
  const [isProductAlreadyOnCart, setIsProductAlreadyOnCart] = useState<boolean>(false);


  function handleFavoriteActions() {

    if (!token) { navigate("/login"); return };

    if (isProductAlreadyFavorited) {
      removeFavoriteProduct(userID, productID);
    } else {
      favoriteProduct(userID, productID);
    }

    setIsProductAlreadyFavorited((prevState) => !prevState);
  }


  function handleCartActions() {

    if (!token) { navigate("/login"); return };

    if (isProductAlreadyOnCart) {
      removeProductFromCart("1", productID);
    } else {
      addProductOnCart("1", productID);
    }

    setIsProductAlreadyOnCart((prevState) => !prevState);
  }


  useEffect(() => {

    favoriteProducts?.data.forEach((item) => {
      item.products.forEach((product) => {
        product.productId?.toString() === productID &&
          setIsProductAlreadyFavorited(true);
      })
    });

  }, [favoriteProducts]);

  useEffect(() => {

    productsOnCart?.data.forEach((item) => {
      item.products.forEach((product) => {
        product.productId?.toString() === productID &&
          setIsProductAlreadyOnCart(true);
      })
    })

  }, [productsOnCart]);


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
          className={isProductAlreadyOnCart ? productOnCart : productNotOnCart}
          onClick={handleCartActions}
        >
          <HiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
}