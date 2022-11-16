import styles from "./style.module.css";


export const Footer = () => {
  return (
    <footer className={`${styles.footer} container-padding`}>
      <div className={`${styles.copyrightContainer} max-width`}>
        <p>&copy; Copyright 2022 - NetTech</p>
      </div>
    </footer >
  );
}