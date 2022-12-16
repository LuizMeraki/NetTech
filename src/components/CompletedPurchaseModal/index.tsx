import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from 'react';
import { handleScroll } from "../../utils/handleScroll";
import { TbTruckDelivery } from "react-icons/tb";
import { ConfettiEffect } from "../ConfettiEffect";
import styles from "./styles.module.css";


interface Props {
  setModal: Dispatch<SetStateAction<boolean>>
}


export const CompletedPurchaseModal = ({ setModal }: Props) => {

  const navigate = useNavigate();


  function handleBackHome() {

    setModal((prevState) => !prevState);
    handleScroll(false);
    navigate("/");
  }


  useEffect(() => {

    handleScroll(true);

  }, []);


  return (
    <div className={`${styles.container} container-padding`}>
      <ConfettiEffect />
      <div className={styles.contentContainer}>
        <p>
          Thank you for your purchase, we hope you like your new product, it's comming soon!
          <TbTruckDelivery />
        </p>
      </div>
      <div className={styles.backHomecontainer}>
        <button type="button" onClick={handleBackHome}>
          Back home
        </button>
      </div>
    </div>
  );
}