import Logo from "../../assets/logo.svg";
import stlyes from "./style.module.css";
import { useEffect } from 'react';


export const LoadingScreen = () => {

  function blockScroll() {
    document.body.style.overflow = "hidden";
  }

  function unlockScroll() {
    document.body.style.overflow = "auto"
  }

  useEffect(() => {

    window.scrollTo(0, 0);
    blockScroll();

    return () => unlockScroll();
  }, []);


  return (
    <div className={stlyes.overlay}>
      <img src={Logo} alt="" />
    </div>
  );
}