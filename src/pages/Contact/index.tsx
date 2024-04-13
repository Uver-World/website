import SolarSystem from "../../components/SolarSystem";
import styles from "./styles/index.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.hero}>
        <SolarSystem />
        <h1>Nous contacter</h1>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Si vous souhaitez nous contactez pour un partenariat, ou simplement
          une demande d'informations, vous pouvez le faire en envoyant un mail à
          notre chef de projet.
        </p>

        <h2 className={styles.title}>Nos coordonnées</h2>

        <h3 className={styles.subtitle}>Paul Comte</h3>

        <p className={styles.text}>
          Email:{" "}
          <a href="mailto:paul.comte@epitech.eu" className={styles.link}>
            paul.compte@epitech.eu
          </a>
        </p>
      </div>
    </>
  );
};

export default Contact;
