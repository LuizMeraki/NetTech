import { FormEvent, useState } from "react";
import { Input } from "../Input";


export const AddProductForm = () => {

  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productImageURL, setProductImageURL] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Product name"
        type="text"
        value={productName}
        setState={setProductName}
        placeholder="Your product name"
        required={true}
      />
      <Input
        label="Price"
        type="number"
        value={productPrice}
        setState={setProductPrice}
        placeholder="Product price"
        required={true}
      />
      <Input
        label="Image URL"
        type="text"
        value={productImageURL}
        setState={setProductImageURL}
        placeholder="Your product image"
        required={true}
      />
      <Input
        label="Description"
        type="text"
        value={productDescription}
        setState={setProductDescription}
        placeholder="Describe about your product"
        required={true}
      />
    </form>
  );
}