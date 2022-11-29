import { PageTitle } from "../../components/PageTitle";
import styles from "./stlye.module.css";


export const FavoriteProducts = () => {
  return (
    <main className="container-padding">
      <div className="max-width">
        <PageTitle title="Favorites" />
        <div className={styles.productsContainer}>

        </div>
      </div>
    </main>
  );
}