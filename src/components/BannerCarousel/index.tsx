import { Carousel } from "react-responsive-carousel";

import CyberMondayBanner from "../../assets/cyberMondayBanner.png";
import TechnologyStore from "../../assets/technologyStore.png";
import MaryChristmasGamer from "../../assets/maryChristmasGamer.png";

import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import componentStyles from "./style.module.css";


export const BannerCarousel = () => {
  return (
    <section className={componentStyles.section}>
      <Carousel
        autoPlay
        infiniteLoop
        className={styles}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <img src={CyberMondayBanner} alt="" />
        <img src={TechnologyStore} alt="" />
        <img src={MaryChristmasGamer} alt="" />
      </Carousel>
    </section>
  );
}