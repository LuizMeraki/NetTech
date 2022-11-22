import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";


interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  value: string;
  setState: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  required: boolean;
}

export const TextArea = ({ className, value, setState, placeholder, required, ...rest }: Props) => {
  return (
    <textarea
      className={`${styles.textarea} ${className && className}`}
      value={value}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      required={required}
      {...rest}
    />
  );
}