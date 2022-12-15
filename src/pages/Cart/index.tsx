import { useEffect } from 'react';
import { PageTitle } from '../../components/PageTitle/index';
import { useCartProduct } from "../../hooks/useCartProduct";
import { Loading } from '../../components/Loding';
import { MiniProductCard } from '../../components/MiniProductCard';
import { ErrorMessage } from '../../components/ErrorMessage';
import styles from "./stlye.module.css";


export const Cart = () => {

  const { fetchProductsOnCart, productsOnCart, loading, error } = useCartProduct();

  useEffect(() => {

    fetchProductsOnCart("1");

  }, []);


  if (loading) {
    return (
      <main className="container-padding">
        <Loading />
      </main>
    )
  }


  return (
    <main className="container-padding">
      <div className="max-width">
        <PageTitle title="Cart" />
        <div className={styles.productsContainer}>
          {productsOnCart?.data.length == 0 &&
            <ErrorMessage
              className="text-center"
              message="You don't have any product on cart yet"
            />
          }
          {productsOnCart?.data.map((product) => (
            <MiniProductCard
              key={product.productId}
              productImageUrl={product.productImageUrl}
              productName={product.productName}
              productPrice={product.productPrice}
              productId={product.productId}
            />
          ))}
        </div>
      </div>
    </main>
  );
}