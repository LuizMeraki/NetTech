import { PageTitle } from "../../components/PageTitle";
import { MiniProductCard } from '../../components/MiniProductCard/index';
import { useFecthUserData } from "../../hooks/useFetchUserData";
import { useEffect } from 'react';
import { Loading } from "../../components/Loding";
import { ErrorMessage } from "../../components/ErrorMessage";
import styles from "./stlye.module.css";


export const FavoriteProducts = () => {

  const { fetchUserData, userData, loading, error } = useFecthUserData();

  useEffect(() => {

    fetchUserData("1");

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
        <PageTitle title="Favorites" />
        <div className={styles.productsContainer}>
          {error &&
            <ErrorMessage
              className="text-center"
              message={error}
            />
          }
          {userData?.data.favoriteProducts.length == 0 &&
            <ErrorMessage
              className="text-center"
              message="You don't have any favorite products yet"
            />
          }
          {userData?.data.favoriteProducts.map((product) => (
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