import { useFetchProducts } from '../../hooks/useFetchProducts';
import { PageTitle } from '../../components/PageTitle/index';
import { ProductCard } from '../../components/ProductCard';
import { Loading } from '../../components/Loding';
import styles from "./style.module.css";


export const Home = () => {

  const { products, loading, error } = useFetchProducts();


  return (
    <main className="container-padding">
      {loading ? (
        <Loading />
      ) : (
        <div className="max-width">
          <PageTitle title="Home" />
          <div className="products-container">
            {products && products.data.map((product) => (
              <ProductCard
                key={product.productId}
                productId={product.productId}
                productName={product.productName}
                productImageUrl={product.productImageUrl}
                productPrice={product.productPrice}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}