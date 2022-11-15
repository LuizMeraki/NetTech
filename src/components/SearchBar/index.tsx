import { FormEvent, useState } from "react";
import styles from "./style.module.css";

export const SearchBar = () => {

  const [query, setQuery] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  console.log(query);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search entiere store here..."
        required
      />
    </form>
  );
}