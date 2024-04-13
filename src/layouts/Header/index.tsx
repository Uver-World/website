import styles from "./styles/index.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginWithToken } from "../../api/users";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    unique_id: "",
    logins: [],
    group: "",
    authentication: {
      Credentials: {
        email: '',
        password: '',
        username: ''
      }
    },
    creation_date: "",
  });

  useEffect(() => {
    const checkToken = () => {
      console.log(localStorage.getItem('tokenDate'));
      if (localStorage.getItem('token')) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    };

    checkToken();

    const getUser = async () => {
      const userData = await loginWithToken(localStorage.getItem("token") || "");

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
      <header className={`${styles.header} dark:bg-slate-900 dark:text-slate-100`}>
        <div>
          <Link className={styles.title} to="/">UverWorld</Link>
        </div>
        <div className={styles.centerSection}>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          {isLogged ? (
            <>
              <Link to="/prices">Tarifs</Link>
              <Link to="/contact">Contactez-nous</Link>
              {(user.group === "User" || user.group === "Website") && <Link to="/dashboard">Dashboard</Link>}
              <Link to="/profile">Profil</Link>
              <span
                className="font-bold cursor-pointer ml-2 mr-6"
                onClick={() => {
                  localStorage.removeItem('token');
                  navigate('/login');
                  setIsLogged(false);
                }}
              >
                Se déconnecter
              </span>
            </>
          ) : (
            <>
              <Link to="/login">Tarifs</Link>
              <Link to="/login">Contactez-nous</Link>
              <Link to="/register">Inscription</Link>
              <Link to="/login">Connexion</Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
