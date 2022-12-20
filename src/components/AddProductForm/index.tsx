import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Label } from "../Label";
import { Input } from "../Input";
import { LoadingScreen } from "../LoadingScreen";
import { ErrorMessage } from "../ErrorMessage";
import { FormButton } from "../FormButton";

import { ProductType } from '../../interfaces/Products';
import { addProductService } from '../../services/addProductService';

import styles from "./style.module.css";


export const AddProductForm = () => {

  const { addProduct, loading, error } = addProductService();

  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>("");
  const [productImageUrl, setProductImageUrl] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");


  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: ProductType = {
      productName,
      productPrice: parseFloat(productPrice),
      productCategory,
      productImageUrl,
      productDescription,
    }

    await addProduct(data);

    if (!error) {
      setProductName("");
      setProductPrice("");
      setProductCategory("");
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
          <option value="laptop">Laptop</option>
          <option value="screen">Screen</option>
          <option value="keyboard">Keyboard</option>
          <option value="mouse">Mouse</option>
          <option value="microphone">Microphone</option>
          <option value="headphones">Headphones</option>
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
        {error && <ErrorMessage message={error} />}
        <Link to="/">Go home</Link>
        <FormButton>Add product</FormButton>
      </div>
    </form>
  );
}