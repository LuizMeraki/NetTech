import { useEffect, useState } from 'react';
import { PageTitle } from '../../components/PageTitle/index';
import { cartProductService } from "../../services/cartProductService";
import { Loading } from '../../components/Loding';
import { MiniProductCard } from '../../components/MiniProductCard';
import { ErrorMessage } from '../../components/ErrorMessage';
import { TotalPriceBar } from '../../components/TotalPriceBar';
import styles from "./stlye.module.css";


export const Cart = () => {

  const { fetchProductsOnCart, productsOnCart, loading, error } = cartProductService();
  
  const [totalPrice, setTotalPrice] = useState<number>(0);

  
  function getTotalPrice () {

    let counter = 0;

    productsOnCart?.data.forEach((product) => {

      if (product.productPrice) {
        counter += product.productPrice
      }

    });

    setTotalPrice(counter);

  }


  useEffect(() => {

    fetchProductsOnCart();

  }, []);


  useEffect(() => {

    productsOnCart && getTotalPrice();

  }, [productsOnCart]);


  if (loading) {
    return (
      <main className="container-padding">
        <Loading />
      </main>
    )
  }


  return (
    <main className={`${styles.main} container-padding`}>
      <section className="max-width">
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
        <TotalPriceBar totalPrice={totalPrice} />
      </section>
    </main>
  );
}