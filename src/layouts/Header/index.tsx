import styles from "./styles/index.module.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} dark:bg-slate-900 dark:text-slate-100`}>
        <div>
          <Link className={styles.title} to="/">UverWorld</Link>
        </div>
        <div className={styles.centerSection}>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/prices">Tarifs</Link>
          <Link to="/contact">Contactez-nous</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profil</Link>
        </div>
      </header>
    </div>
  )
}

export default Header
