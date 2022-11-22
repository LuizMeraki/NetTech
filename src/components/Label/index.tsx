import styles from "./style.module.css";


interface Props {
  label: string;
  required?: boolean;
  children: JSX.Element;
}

export const Label = ({ label, required, children }: Props) => {
  return (
    <label className={styles.label}>
      <span className={styles.labelText}>
        {label}
        {required && <span>*</span>}
      </span>
      {children}
    </label>
  )
}