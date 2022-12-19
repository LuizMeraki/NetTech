import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchUserData } from '../../services/fetchUserData';
import { PageTitle } from "../../components/PageTitle";
import { ProfileActions } from "../../components/ProfileActions";
import { Loading } from '../../components/Loding';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { ErrorMessage } from '../../components/ErrorMessage';
import styles from "./style.module.css";


export const Profile = () => {

  const { getUserData, userData, loading, error } = fetchUserData();

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
      <div className="max-width">
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
          {userData?.data.authorities.map((item) => (
            item.authority === "ROLE_ADMIN" &&
            <ProfileActions
              icon={<AiOutlineUser />}
              action={() => navigate("/add-product")}
              actionName="Add product"
            />
          ))}
        </div>
      </div>
    </main>
  );
}