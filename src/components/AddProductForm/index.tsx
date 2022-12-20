import { FormEvent, useState } from "react";
import { Input } from "../Input";
import { productDataType } from '../../interfaces/Products';
import { addProductService } from '../../services/addProductService';
import { LoadingScreen } from "../LoadingScreen";
import { ErrorMessage } from "../ErrorMessage";
import { FormButton } from "../FormButton";
import { Link } from "react-router-dom";
import { Label } from "../Label";
import styles from "./style.module.css";


export const AddProductForm = () => {

  const { addProduct, loading, error } = addProductService();

  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [productImageUrl, setProductImageUrl] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: productDataType = {
      productName,
      productPrice: parseFloat(productPrice),
      productCategory,
      productImageUrl,
      productDescription,
    }

    addProduct(data);

    if (!error) {
      setProductName("");
      setProductPrice("");
      setProductImageUrl("");
      setProductDescription("");
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      {loading && <LoadingScreen />}
      <Label label="Product name">
        <Input
          type="text"
          value={productName}
          setState={setProductName}
          placeholder="Your product name"
          required={true}
        />
      </Label>
      <Label label="Price">
        <Input
          type="number"
          value={productPrice}
          setState={setProductPrice}
          placeholder="Product price"
          required={true}
        />
      </Label>
      <Label label="Category">
        <select
          className={styles.select}
          onChange={(e) => setProductCategory(e.target.value)}
          required
        >
          <option value="">Please choose a category</option>
          <option value="laptop">laptop</option>
          <option value="keyboard">keyboard</option>
          <option value="mouse">mouse</option>
          <option value="microphone">microphone</option>
          <option value="screen">screen</option>
          <option value="headphones">headphones</option>
        </select>
      </Label>
      <Label label="Product image URL">
        <Input
          type="text"
          value={productImageUrl}
          setState={setProductImageUrl}
          placeholder="Your product image"
          required={true}
        />
      </Label>
      <Label label="Description">
        <Input
          type="text"
          value={productDescription}
          setState={setProductDescription}
          placeholder="Describe about your product"
          required={true}
        />
      </Label>
      <div className="form-actions">
        <Link to="/">Go home</Link>
        <FormButton>Add product</FormButton>
      </div>
      {error && <ErrorMessage message={error} />}
    </form>
  );
}