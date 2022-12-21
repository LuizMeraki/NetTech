import { fetchProductsService } from '../../services/fetchProductsService';
import { PageTitle } from '../../components/PageTitle/index';
import { ProductCard } from '../../components/ProductCard';
import { Loading } from '../../components/Loding';
import { ErrorMessage } from '../../components/ErrorMessage';
import styles from "./style.module.css";


export const Home = () => {

  const { products, loading, error } = fetchProductsService();


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }


  return (
    <main className="container-padding">
      <section className="max-width">
        {error &&
          <ErrorMessage
            className="text-center"
            message={error}
          />
        }
        {products?.data.length === 0 ? (
          <ErrorMessage
            className="text-center"
            message="There are no products available now, please, come back later."
          />
        ) : (
          <>
            {products?.data.map((item, index) => (
              <section key={index} className={styles.productsContainer}>
                <PageTitle title={item.categoryName} />
                <ul>
                  {item.products.map((product) => (
                    <li key={product.productId}>
                      <ProductCard
                        productId={product.productId}
                        productName={product.productName}
                        productImageUrl={product.productImageUrl}
                        productPrice={product.productPrice}
                      />
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </>
        )}
      </section>
    </main>
  );
}