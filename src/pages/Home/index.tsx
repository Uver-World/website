import styles from './styles/index.module.css';
import {Link} from "react-router-dom";
import SolarSystem from "../../components/SolarSystem";

const Home = () => {
  return (
    <>
      <section className={styles.container}>
        <SolarSystem />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>UverWorld</h1>
          <h2 className={styles.subtitle}>Vos simulations d'un simple clic</h2>

          {/*<Link to="/download" className={styles.appDownload}>Télécharger gratuitement</Link>*/}
          <Link to="/about" className={styles.appDownload}>En savoir plus</Link>
        </div>

        {/*<video id="background-video" autoPlay loop muted className={styles.background}>*/}
        {/*  <source src="/background.webm" type="video/webm" />*/}
        {/*</video>*/}
      </section>
    </>
  );
}

export default Home;