import { LoginForm } from "../../components/LoginForm";
import { PageTitle } from "../../components/PageTitle";
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import styles from "./style.module.css";


export const Login = () => {

  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {

    if (token) navigate("/");

  }, [token]);


  return (
    <main className="container-padding">
      <div className="max-width">
        <PageTitle title="Login" />
        <div className={styles.container}>
          <div className={`${styles.loginContainer} gray-box`}>
            <div className={styles.titleContainer}>
              <h3>Registered Users</h3>
              <p>If you have an account, sign in with your e-mail and password</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}