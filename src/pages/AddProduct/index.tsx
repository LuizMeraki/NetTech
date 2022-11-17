import { AddProductForm } from '../../components/AddProductForm/index';
import styles from "./style.module.css";
import { PageTitle } from '../../components/PageTitle/index';


export const AddProduct = () => {
  return (
    <main className="container-padding">
      <div className="max-width">
        <PageTitle title="Add product" />
        <div className={styles.container}>
          <div className="gray-box">
            <AddProductForm />
          </div>
        </div>
      </div>
    </main>
  );
}