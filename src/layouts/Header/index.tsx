import styles from "./styles/index.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

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
  }, []);

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
              <Link to="/dashboard">Dashboard</Link>
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
