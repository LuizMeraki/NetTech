import { FormEvent, useState } from "react";
import { Input } from "../Input";
import { IData } from '../../interfaces/Products';
import { useAddProduct } from '../../hooks/useAddProduct';
import { LoadingScreen } from "../LoadingScreen";
import { ErrorMessage } from "../ErrorMessage";
import { FormButton } from "../FormButton";
import { Link } from "react-router-dom";


export const AddProductForm = () => {

  const { addProduct, loading, error } = useAddProduct();

  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("");
  const [productImageUrl, setProductImageUrl] = useState<string>("");
  const [productDescription, setProductDescription] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data: IData = {
      productName,
      productPrice: parseFloat(productPrice),
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
      <Input
        label="Product name"
        htmlFor="product-name"
        className="input-with-label"
        type="text"
        value={productName}
        setState={setProductName}
        placeholder="Your product name"
        required={true}
      />
      <Input
        label="Price"
        htmlFor="product-price"
        className="input-with-label"
        type="number"
        value={productPrice}
        setState={setProductPrice}
        placeholder="Product price"
        required={true}
      />
      <Input
        label="Image URL"
        htmlFor="product-image-url"
        className="input-with-label"
        type="text"
        value={productImageUrl}
        setState={setProductImageUrl}
        placeholder="Your product image"
        required={true}
      />
      <Input
        label="Description"
        htmlFor="product-description"
        className="input-with-label"
        type="text"
        value={productDescription}
        setState={setProductDescription}
        placeholder="Describe about your product"
        required={true}
      />
      <div className="form-actions">
        <Link to="/">Go home</Link>
        <FormButton text="Enviar" />
      </div>
      {error && <ErrorMessage message={error} />}
    </form>
  );
}