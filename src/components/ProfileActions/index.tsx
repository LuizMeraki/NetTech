import styles from "./style.module.css";


interface Props {
  icon: JSX.Element;
  action: React.MouseEventHandler<HTMLDivElement>;
  actionName: string;
  className?: string;
}


export const ProfileActions = ({ icon, action, actionName, className }: Props) => {
  return (
    <div
      className={`${styles.container} ${className ? className : ""}`}
      onClick={action}
    >
      {icon}
      {actionName}
    </div>
  );
}