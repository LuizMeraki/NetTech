import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";


interface Props {
  label: string;
  type: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  required: boolean;
}

export const Input = ({ label, type, value, setState, placeholder, required }: Props) => {
  return (
    <label className={styles.label}>
      <span>{label}
        <span className={styles.redAsteristic}>*</span>
      </span>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </label>
  )
}