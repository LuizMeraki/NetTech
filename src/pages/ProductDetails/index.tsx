import { useEffect, FormEvent, useState } from 'react';
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loding";
import { ProductDetailsActions } from "../../components/ProductDetailsActions";
import { useFetchProductDetails } from "../../hooks/useFetchProductDetails";
import { moneyFormatter } from "../../utils/moneyFormatter";
import { BsFillChatRightFill } from "react-icons/bs";
import styles from "./style.module.css";


export const ProductDetails = () => {

  const [comment, setComment] = useState<string>("");

  const { productId } = useParams();
  const { fetchProductDetails, productDetails, loading, error } = useFetchProductDetails();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setComment("");
  }

  useEffect(() => {

    fetchProductDetails(productId);

  }, [productId]);


  return (
    <main className="container-padding">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={`${styles.mainContainer} max-width`}>
            <ProductDetailsActions />
            <div className={styles.container}>
              <div className={styles.productDetailsContainer}>
                <h3>{productDetails?.data.productName}</h3>
                <p className={styles.price}>
                  {moneyFormatter(productDetails?.data.productPrice)}
                </p>
                <p>{productDetails?.data.productDescription}</p>
              </div>
              <div className={styles.productImageContainer}>
                <img src={productDetails?.data.productImageUrl} alt={productDetails?.data.productName} />
              </div>
            </div>
            <div className={styles.commentsContainer}>
              <h2>Comentários</h2>
              <form onSubmit={handleSubmit}>
                <textarea
                  value={comment}
                  placeholder="Leave a comment"
                  required
                />
                <button type="submit">
                  <BsFillChatRightFill />
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </main>
  );
}