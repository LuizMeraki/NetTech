import { useState } from 'react';
import { cartProductService } from '../../services/cartProductService';
import { moneyFormatter } from "../../utils/moneyFormatter";
import { CompletedPurchaseModal } from '../CompletedPurchaseModal';
import styles from "./style.module.css";


interface Props {
  totalPrice: number;
}


export const TotalPriceBar = ({ totalPrice }: Props) => {

  const { removeAllProductsFromCart } = cartProductService();

  const [showModal, setShowModal] = useState<boolean>(false);


  function handleBuyNow() {

    removeAllProductsFromCart();
    setShowModal(true)

  }


  return (
    <>
      {showModal &&
        <CompletedPurchaseModal setModal={setShowModal} />
      }
      <div className={styles.container}>
        <div className={`${styles.flexArea} max-width`}>
          <div className={styles.totalPriceContainer}>
            <p>Total Price:</p>
            <span>{moneyFormatter(totalPrice)}</span>
          </div>
          <div className={styles.redirectContainer}>
            {totalPrice ?
              <button type="button" onClick={handleBuyNow}>
                Buy Now
              </button> : null
            }
          </div>
        </div>
      </div>
    </>
  );
}