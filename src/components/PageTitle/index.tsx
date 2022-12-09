import styles from "./style.module.css";


interface Props {
  title: string;
}


export const PageTitle = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  )
}