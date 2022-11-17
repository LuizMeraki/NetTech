import styles from "./style.module.css";


interface Props {
  message: string;
}

export const ErrorMessage = ({ message }: Props) => {
  return (
    <div className={styles.messageContainer}>
      <p>{message}</p>
    </div>
  );
}