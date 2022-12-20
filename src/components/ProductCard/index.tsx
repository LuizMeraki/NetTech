import { ProductType } from "../../interfaces/Products";
import { useNavigate } from "react-router-dom";
import { moneyFormatter } from "../../utils/moneyFormatter";
import styles from "./style.module.css";


export const ProductCard = ({ productId, productImageUrl, productName, productPrice }: ProductType) => {

  const navigate = useNavigate();

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
        <span>{moneyFormatter(productPrice)}</span>
      </div>
    </div>
  );
}