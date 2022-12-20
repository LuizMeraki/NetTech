import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ProductType } from '../../interfaces/Products';
import { moneyFormatter } from "../../utils/moneyFormatter";
import styles from "./style.module.css";


export const MiniProductCard = ({ productImageUrl, productName, productPrice, productId }: ProductType) => {

  const navigate = useNavigate();

  function handleSeeProduct() {
    navigate(`/product-details/${productId}`);
  }


  return (
    <div className={styles.container}>
      <div className={styles.productPrice}>
        <p>{moneyFormatter(productPrice)}</p>
      </div>
      <div className={styles.productImage}>
        <img src={productImageUrl} alt={productName} />
      </div>
      <div className={styles.productName}>
        <p>{productName}</p>
      </div>
      <div className={styles.productActions}>
        <button type="button" onClick={handleSeeProduct}>
          <AiOutlineEye />
        </button>
      </div>
    </div>
  )
}