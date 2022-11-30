import { useFetchProducts } from '../../hooks/useFetchProducts';
import { PageTitle } from '../../components/PageTitle/index';
import { ProductCard } from '../../components/ProductCard';
import { Loading } from '../../components/Loding';
import { ErrorMessage } from '../../components/ErrorMessage';
import styles from "./style.module.css";


export const Home = () => {

  const { products, loading, error } = useFetchProducts();

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
        <PageTitle title="Home" />
        {error &&
          <ErrorMessage
            className={`text-center`}
            message={error}
          />
        }
        {products?.data.length == 0 &&
          <ErrorMessage
            className="text-center"
            message="There are no products available now, please, come back later."
          />
        }
        <div className="products-container">
          {products?.data.map((product) => (
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
    </main>
  );
}