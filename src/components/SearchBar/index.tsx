import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import styles from "./style.module.css";


export const SearchBar = () => {

  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate(`/search?q=${query}`);
  }


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        type="text"
        value={query}
        setState={setQuery}
        placeholder="Search entiere store here..."
        required={true}
      />
    </form>
  );
}