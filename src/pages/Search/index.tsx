import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchProductsService } from "../../services/searchProductsService";
import { ProductCard } from "../../components/ProductCard";
import { Loading } from "../../components/Loding";
import { PageTitle } from "../../components/PageTitle";
import { ErrorMessage } from "../../components/ErrorMessage";
import styles from "./style.module.css";


export const Search = () => {

  const [query] = useSearchParams();
  const { searchProducts, products, loading, error } = searchProductsService();


  function queryFormatter(query: URLSearchParams): string {
    const formattedQuery = query.toString().trim().replace("q=", "");

    return formattedQuery;
  }


  useEffect(() => {

    searchProducts(queryFormatter(query));

  }, [query]);


  return (
    <main className="container-padding">
      <section className="max-width">
        <PageTitle title="Search" />
        {loading && <Loading />}
        {error &&
          <ErrorMessage
            className="text-center"
            message={error}
          />
        }
        {products?.data.length == 0 &&
          <ErrorMessage
            className="text-center"
            message="Could not find what you are looking for."
          />
        }
        <div className="products-container">
          <ul className={styles.productsList}>
            {products?.data.map((product) => (
              <li key={product.productId}>
                <ProductCard
                  key={product.productId}
                  productId={product.productId}
                  productImageUrl={product.productImageUrl}
                  productName={product.productName}
                  productPrice={product.productPrice}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}