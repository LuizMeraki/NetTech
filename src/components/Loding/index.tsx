import Logo from "../../assets/logo.svg";
import styles from "./style.module.css";


export const Loading = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="" />
    </div>
  );
}