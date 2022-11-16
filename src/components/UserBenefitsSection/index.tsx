import { FooterCard } from '../FooterCard/index';

import Account from "../../assets/Account.svg";
import Support from "../../assets/Support.svg";
import Saving from "../../assets/Saving.svg";

import styles from "./style.module.css";


export const UserBenefitsSection = () => {
  return (
    <div className={`${styles.cardsContainer} container-padding`}>
      <div className="max-width">
        <FooterCard
          imagePath={Support}
          imageAlt="Support"
          title="Product Support"
          description="Up to 3 years on-site warranty available for your peace of mind."
        />
        <FooterCard
          imagePath={Account}
          imageAlt="Account"
          title="Personal Account"
          description="With big discounts, free delivery and a dedicated support specialist."
        />
        <FooterCard
          imagePath={Saving}
          imageAlt="Saving"
          title="Amazing Savings"
          description="Up to 70% off new Products, you can be sure of the best price."
        />
      </div>
    </div>
  );
}