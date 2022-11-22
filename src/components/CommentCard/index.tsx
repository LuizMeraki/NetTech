import styles from "./style.module.css";


interface Props {
  title: string;
  content: string;
}


export const CommentCard = ({ title, content }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
      </div>
      <div className={styles.contentContainer}>
        <p>{content}</p>
      </div>
    </div>
  );
}