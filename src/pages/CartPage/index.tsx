import styles from "./stlye.module.css";
import { PageTitle } from '../../components/PageTitle/index';


export const CartPage = () => {
  return (
    <main className="container-padding">
      <div className="max-width">
        <PageTitle title="Cart" />
        <div className={styles.productsContainer}>

        </div>
      </div>
    </main>
  );
}