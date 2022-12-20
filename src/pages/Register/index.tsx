import { useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";
import { PageTitle } from "../../components/PageTitle";
import styles from "./style.module.css";


export const Register = () => {

  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {

    if (token) navigate("/");

  }, []);


  return (
    <main className="container-padding">
      <section className="max-width">
        <PageTitle title="Register" />
        <div className={styles.registerContainer}>
          <section className="gray-box">
            <div className={styles.titleContainer}>
              <h3>Register and start shopping</h3>
              <p>if you haven't an account, create it now!</p>
            </div>
            <RegisterForm />
          </section>
          <section className={`gray-box ${styles.newCostumer}`}>
            <div className={styles.titleContainer}>
              <h3>New Costumer?</h3>
              <p>Creating an account has many benefits:</p>
            </div>
            <ul>
              <li>Check out faster</li>
              <li>Keep more than one address</li>
              <li>Track orders and more!</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}