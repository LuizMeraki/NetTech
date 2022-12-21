import { useEffect, Dispatch, SetStateAction } from 'react';
import { userAuthService } from '../../services/userAuthService';
import { handleScroll } from '../../utils/handleScroll';
import styles from "./style.module.css";


interface Props {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}


export const LogoutModal = ({ setShowModal }: Props) => {

  const { logoutUser } = userAuthService();


  useEffect(() => {

    handleScroll(true);

    return () => handleScroll(false);

  }, []);


  return (
    <div className={`${styles.overlay} container-padding`}>
      <div className={styles.container}>
        <div className={styles.pharseContainer}>
          <p>Are you sure you want to logout?</p>
        </div>
        <div className={styles.actionsContainer}>
          <button onClick={() => { setShowModal(false) }}>Keep</button>
          <button onClick={() => { logoutUser() }}>Logout</button>
        </div>
      </div>
    </div>
  );
}