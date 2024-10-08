import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginWithToken } from "../../api/users";
import styles from "./styles/index.module.css";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    unique_id: "",
    logins: [],
    authentication: {
      Credentials: {
        email: "",
        password: "",
        username: "",
      },
    },
    creation_date: "",
  });

  console.log(user);

  useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("token")) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    };

    checkToken();

    const getUser = async () => {
      const userData = await loginWithToken(
        localStorage.getItem("token") || ""
      );

      if (userData.data.code && userData.data.code !== 200) {
        alert(userData.data.message);
      } else {
        setUser(userData.data);
      }
    };

    if (isLogged) {
      getUser();
    }
  }, [isLogged]);

  return (
    <div className={styles.container}>
      <header
        className={`${styles.header} dark:bg-slate-900 dark:text-slate-100`}
      >
        <div>
          <Link className={styles.title} to="/">
            UverWorld
          </Link>
        </div>
        <div className={styles.centerSection}>
          <Link className={styles.link} to="/">
            Accueil
          </Link>
          <Link className={styles.link} to="/about">
            À propos
          </Link>
          {isLogged ? (
            <>
              <Link className={styles.link} to="/prices">
                Tarifs
              </Link>
              <Link className={styles.link} to="/contact">
                Contactez-nous
              </Link>
              <Link className={styles.link} to="/faq">
                FAQ
              </Link>
              <Link className={styles.link} to="/marketplace">Marketplace</Link>
              <Link className={styles.link} to="/dashboard">
                Dashboard
              </Link>
              <Link className={styles.link} to="/profile">
                Profil
              </Link>
              <span
                className={`font-bold cursor-pointer ml-2 mr-6 ${styles.link}`}
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/login");
                  setIsLogged(false);
                }}
              >
                Se déconnecter
              </span>
            </>
          ) : (
            <>
              <Link className={styles.link} to="/login">
                Tarifs
              </Link>
              <Link className={styles.link} to="/login">
                Contactez-nous
              </Link>
              <Link className={styles.link} to="/faq">
                FAQ
              </Link>
              <Link className={styles.link} to="/register">
                Inscription
              </Link>
              <Link className={styles.link} to="/login">
                Connexion
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
