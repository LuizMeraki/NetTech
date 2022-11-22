import { ButtonHTMLAttributes } from "react";
import styles from "./style.module.css";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element;
}

export const FormButton = ({ children, ...rest }: Props) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
}