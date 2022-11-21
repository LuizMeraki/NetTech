import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";


interface Props {
  label?: string;
  htmlFor?: string;
  className?: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  required: boolean;
}

export const TextArea = ({ label, htmlFor, className, value, setState, placeholder, required }: Props) => {
  return (
    <div className={`${styles.container} ${className ? className : null}`}>
      {label &&
        <label htmlFor={htmlFor}>{label}
          <span className={styles.redAsteristic}>*</span>
        </label>
      }
      <textarea
        className={styles.textarea}
        id={htmlFor}
        value={value}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}