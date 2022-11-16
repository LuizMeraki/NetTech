import { Link } from 'react-router-dom';
import { SearchBar } from "../SearchBar";

import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

import Logo from "../../assets/logo.svg";
import styles from "./style.module.css";


export const Header = () => {
  return (
    <header className={`${styles.header} container-padding`}>
      <div className={`${styles.headerArea} max-width`}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <SearchBar />
        <div className={styles.actions}>
          <AiOutlineHeart />
          <HiOutlineShoppingCart />
        </div>
      </div>
    </header>
  );
}