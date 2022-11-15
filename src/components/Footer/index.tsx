import { FooterCard } from "../FooterCard";

import Account from "../../assets/Account.svg";
import Support from "../../assets/Support.svg";
import Saving from "../../assets/Saving.svg";

import styles from "./style.module.css";
import { FooterLinkList } from "../FooterLinkList";


export type FooterLinksList = {
  goTo: string;
  linkText: string;
}

export const Footer = () => {

  const pcPartsData: Array<FooterLinksList> = [
    { goTo: "/", linkText: "CPUS" },
    { goTo: "/", linkText: "RAM" },
    { goTo: "/", linkText: "Motherboards" },
    { goTo: "/", linkText: "Keyboards" },
    { goTo: "/", linkText: "Headsets" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerCardsContainer}>
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
      <div className={styles.footerLinksContainer}>
        <div className={`${styles.footerLinks} max-width`}>
          <FooterLinkList
            title="PC Parts"
            linkData={pcPartsData}
          />
          <FooterLinkList
            title="PC Parts"
            linkData={pcPartsData}
          />
          <FooterLinkList
            title="PC Parts"
            linkData={pcPartsData}
          />
        </div>
      </div>
      <div className={`${styles.copyrightContainer} max-width`}>
        <p>&copy; Copyright 2022 - NetTech</p>
      </div>
    </footer >
  );
}