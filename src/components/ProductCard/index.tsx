import { IProducts } from "../../interfaces/Products";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";


export const ProductCard = ({ productId, productImageUrl, productName, productPrice }: IProducts) => {

  const navigate = useNavigate();

  function formatPrice(price: number): string {
    const formatedPrice = price.toLocaleString("en-US", { style: "currency", currency: "USD" });

    return formatedPrice
  }

  function handleCard() {
    navigate(`/product-details/${productId}`);
  }


  return (
    <div className={styles.card} onClick={handleCard}>
      <div className={styles.imageContainer}>
        <img src={productImageUrl} alt={productName} />
      </div>
      <div className={styles.productNameContainer}>
        <p>{productName}</p>
      </div>
      <div className={styles.priceContainer}>
        <span>{formatPrice(productPrice)}</span>
      </div>
    </div>
  );
}