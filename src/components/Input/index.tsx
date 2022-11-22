import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";


interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  required: boolean;
}

export const Input = ({ className, type, value, setState, placeholder, required, ...rest }: Props) => {
  return (
    <input
      className={`${styles.input} ${className && className}`}
      type={type}
      value={value}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      required={required}
      {...rest}
    />
  )
}