import { AiOutlineEye } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { productData } from "../../interfaces/Products";
import styles from "./style.module.css";


export const MiniProductCard = ({ productImageUrl, productName, productId }: productData) => {

  const navigate = useNavigate();

  function handleSeeProduct() {
    navigate(`/product-details/${productId}`);
  }


  return (
    <div className={styles.container}>
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
        <button type="button">
          <FiTrash />
        </button>
      </div>
    </div>
  )
}