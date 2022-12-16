import { useAuthContext } from '../../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { SearchBar } from "../SearchBar";

import { AiOutlineHeart, AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";

import Logo from "../../assets/logo.svg";
import styles from "./style.module.css";


export const Header = () => {

  const { token } = useAuthContext();


  return (
    <header className={`${styles.header} container-padding`}>
      <div className={`${styles.headerArea} max-width`}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="Logo" />
        </Link>
        <SearchBar />
        <div className={styles.actions}>
          {token ?
            <>
              <Link to="/favorites">
                <AiOutlineHeart />
              </Link>
              <Link to="/profile">
                <AiOutlineUser />
              </Link>
            </>
            :
            <>
              <Link to="/register">
                <AiOutlineUserAdd />
              </Link>
            </>
          }
        </div>
      </div>
    </header>
  );
}