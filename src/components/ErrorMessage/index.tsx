import styles from "./style.module.css";


interface Props {
  message: string;
  className?: string;
}

export const ErrorMessage = ({ message, className }: Props) => {
  return (
    <div className={`${styles.messageContainer} ${className && className}`}>
      <p>{message}</p>
    </div>
  );
}