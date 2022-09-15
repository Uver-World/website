import styles from './styles/index.module.css';
import background from '../../assets/img/background.jpg'
import download from "../../assets/img/background.jpg";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>UverWorld</h1>
        <h2 className={styles.subtitle}>Simulez vos rêves</h2>

        <Link to="/download" className={styles.appDownload}>Télécharger gratuitement</Link>
      </div>
      <img src={background} alt="background" className={styles.background} />
    </section>
  );
}

export default Home;