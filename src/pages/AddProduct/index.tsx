import { AddProductForm } from '../../components/AddProductForm/index';
import { PageTitle } from '../../components/PageTitle/index';
import styles from "./style.module.css";


export const AddProduct = () => {
  return (
    <main className="container-padding">
      <section className="max-width">
        <PageTitle title="Add product" />
        <div className={`${styles.container} gray-box`}>
          <AddProductForm />
        </div>
      </section>
    </main>
  );
}