import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { fetchUserDataService } from '../../services/fetchUserDataService';
import { PageTitle } from "../../components/PageTitle";
import { ProfileActions } from "../../components/ProfileActions";
import { ErrorMessage } from '../../components/ErrorMessage';
import { Loading } from '../../components/Loding';
import { LogoutModal } from '../../components/LogoutModal';
import styles from "./style.module.css";
import {
  AiOutlineHeart,
  AiOutlinePoweroff,
  AiOutlineShoppingCart,
  AiOutlineUser
} from "react-icons/ai";


export const Profile = () => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const { getUserData, userData, loading, error } = fetchUserDataService();
  const navigate = useNavigate();


  useEffect(() => {

    getUserData();

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
      {showModal && <LogoutModal setShowModal={setShowModal} />}
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
            action={() => setShowModal(true)}
            actionName="Logout"
          />
        </div>
      </section>
    </main>
  );
}