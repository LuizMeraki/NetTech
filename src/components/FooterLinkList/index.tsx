import { Link } from "react-router-dom";
import { FooterLinksList } from "../Footer";
import styles from "./style.module.css";

interface Props {
  title: string;
  linkData: Array<FooterLinksList>;
}

export const FooterLinkList = ({ title, linkData }: Props) => {
  return (
    <ul className={styles.list}>
      <h4>{title}</h4>
      {linkData.map((data) => (
        <li>
          <Link to={`${data.goTo}`}>{data.linkText}</Link>
        </li>
      ))}
    </ul>
  );
}