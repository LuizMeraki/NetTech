import { useEffect } from 'react';
import { PageTitle } from "../../components/PageTitle";
import { MiniProductCard } from '../../components/MiniProductCard/index';
import { useFavoriteProduct } from "../../hooks/useFavoriteProduct";
import { Loading } from "../../components/Loding";
import { ErrorMessage } from "../../components/ErrorMessage";
import styles from "./stlye.module.css";


export const WishList = () => {

  const { fetchFavoriteProducts, favoriteProducts, loading, error } = useFavoriteProduct();


  useEffect(() => {

    fetchFavoriteProducts("1");

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
        <PageTitle title="WishList" />
        <div className={styles.productsContainer}>
          {error &&
            <ErrorMessage
              className="text-center"
              message={error}
            />
          }
          {favoriteProducts?.data.length == 0 &&
            <ErrorMessage
              className="text-center"
              message="You don't have any favorite products yet"
            />
          }
          {favoriteProducts?.data.map((product) => (
            <MiniProductCard
              key={product.productId}
              productPrice={product.productPrice}
              productImageUrl={product.productImageUrl}
              productName={product.productName}
              productId={product.productId}
            />
          ))}
        </div>
      </div>
    </main>
  );
}