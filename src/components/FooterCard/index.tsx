import styles from "./style.module.css";

interface Props {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const FooterCard = ({ imagePath, imageAlt, title, description }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>
        <img src={imagePath} alt={imageAlt} />
      </div>
      <div className={styles.cardTitle}>
        <h4>{title}</h4>
      </div>
      <div className={styles.cardDescription}>
        <p>{description}</p>
      </div>
    </div>
  );
}