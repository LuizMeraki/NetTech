import { useEffect } from 'react';
import { handleScroll } from '../../utils/handleScroll';

import Logo from "../../assets/logo.svg";
import stlyes from "./style.module.css";


export const LoadingScreen = () => {

  useEffect(() => {

    handleScroll(true);
    return () => handleScroll(false);

  }, []);


  return (
    <div className={stlyes.overlay}>
      <img src={Logo} alt="" />
    </div>
  );
}