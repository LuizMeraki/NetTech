import styles from "./style.module.css";


interface Props {
  text: string;
}

export const FormButton = ({ text }: Props) => {
  return (
    <button type="submit" className={styles.button}>
      {text}
    </button>
  );
}