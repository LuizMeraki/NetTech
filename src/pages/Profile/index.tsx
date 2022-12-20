import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { userAuthService } from '../../services/userAuthService';
import { fetchUserDataService } from '../../services/fetchUserDataService';
import { PageTitle } from "../../components/PageTitle";
import { ProfileActions } from "../../components/ProfileActions";
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loading } from '../../components/Loding';
import styles from "./style.module.css";
import {
  AiOutlineHeart,
  AiOutlinePoweroff,
  AiOutlineShoppingCart,
  AiOutlineUser
} from "react-icons/ai";


export const Profile = () => {

  const { getUserData, userData, loading, error } = fetchUserDataService();
  const { logoutUser } = userAuthService();

  const navigate = useNavigate();


  useEffect(() => {

    getUserData("2");

  }, []);


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }


  return (
    <main className="container-padding">
      <section className="max-width">
        <PageTitle title="Profile" />
        {error ?
          <ErrorMessage message={error} className="text-center" />
          :
          <div className={styles.greetingsContainer}>
            <h2>Hi, {userData?.data.username}</h2>
          </div>
        }
        <div className={styles.profileActionsContainer}>
          <ProfileActions
            icon={<AiOutlineHeart />}
            action={() => navigate("/favorites")}
            actionName="Favorites"
          />
          <ProfileActions
            icon={<AiOutlineShoppingCart />}
            action={() => navigate("/cart")}
            actionName="Cart"
          />
          {userData?.data.authorities.map((item, index) => (
            item.authority === "ROLE_ADMIN" &&
            <ProfileActions
              key={index}
              icon={<AiOutlineUser />}
              action={() => navigate("/add-product")}
              actionName="Add product"
            />
          ))}
          <ProfileActions
            icon={<AiOutlinePoweroff />}
            action={() => logoutUser()}
            actionName="Logout"
          />
        </div>
      </section>
    </main>
  );
}