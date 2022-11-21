import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearchProducts } from "../../hooks/useSearchProducts";
import { ProductCard } from "../../components/ProductCard";
import { Loading } from "../../components/Loding";
import { PageTitle } from "../../components/PageTitle";
import { ErrorMessage } from "../../components/ErrorMessage";
import styles from "./style.module.css";


export const Search = () => {

  const [query] = useSearchParams();
  const { searchProducts, products, loading, error } = useSearchProducts();

  function queryFormatter(query: URLSearchParams): string {
    const formattedQuery = query.toString().trim().replace("q=", "");

    return formattedQuery;
  }

  useEffect(() => {

    searchProducts(queryFormatter(query));

  }, [query]);


  return (
    <main className="container-padding">
      {loading && <Loading />}
      <div className="max-width">
        <PageTitle title="Search" />
        {error && <ErrorMessage message={error} />}
        {products?.data.length == 0 &&
          <p className={styles.notFound}>Não foi possível encontrar o que você está buscando,
            verifique suas informações e tente novamente.</p>
        }
        <div className="products-container">
          {products?.data.map((product) => (
            <ProductCard
              key={product.productId}
              productId={product.productId}
              productImageUrl={product.productImageUrl}
              productName={product.productName}
              productPrice={product.productPrice}
            />
          ))}
        </div>
      </div>
    </main>
  );
}