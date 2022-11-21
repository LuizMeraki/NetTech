import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loding";
import { ProductDetailsActions } from "../../components/ProductDetailsActions";
import { useFetchProductDetails } from "../../hooks/useFetchProductDetails";
import styles from "./style.module.css";


export const ProductDetails = () => {

  const { productId } = useParams();
  const { fetchProductDetails, productDetails, loading, error } = useFetchProductDetails();

  useEffect(() => {

    fetchProductDetails(productId);

  }, [productId]);


  return (
    <main className="container-padding">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ProductDetailsActions />
          <div className={`${styles.container} max-width`}>
            <div className={styles.productDetailsContainer}>
              <h3>{productDetails?.data.productName}</h3>
              <p className={styles.price}>{productDetails?.data.productPrice}</p>
              <p>{productDetails?.data.productDescription}</p>
            </div>
            <div className={styles.productImageContainer}>
              <img src={productDetails?.data.productImageUrl} alt={productDetails?.data.productName} />
            </div>
          </div>
        </>
      )}
    </main>
  );
}