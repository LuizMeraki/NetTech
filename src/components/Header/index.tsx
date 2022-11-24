import { Link } from 'react-router-dom';
import { SearchBar } from "../SearchBar";

import { AiOutlineHeart, AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

import Logo from "../../assets/logo.svg";
import styles from "./style.module.css";


export const Header = () => {
  return (
    <header className={`${styles.header} container-padding`}>
      <div className={`${styles.headerArea} max-width`}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>
        <SearchBar />
        <div className={styles.actions}>
          <Link to="/favorites">
            <AiOutlineHeart />
          </Link>
          <Link to="/cart">
            <HiOutlineShoppingCart />
          </Link>
          <Link to="/register">
            <AiOutlineUserAdd />
          </Link>
        </div>
      </div>
    </header>
  );
}