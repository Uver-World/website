import styles from './styles/index.module.css'
import SolarSystem from "../../components/SolarSystem";
import {CheckCircleIcon} from "@chakra-ui/icons";
import {Button} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Prices = () => {
  return (
    <>
      <div className={styles.hero}>
        <SolarSystem />
        <h1>Tarifs</h1>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>Choisissez l'offre qui correspond à vos besoins</h1>

        <div className={styles.prices}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Starter</h2>
            <p className={styles.cardDescription}>Idéal pour les petites entreprises</p>

            <ul className={styles.cardFeatures}>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
            </ul>
            <div className={styles.cardPrice}>
              <span className={styles.cardPriceNumber}>$49.99 / month</span>
              <Button colorScheme="blue" size="lg" className={styles.cardPriceButton}><Link to="./1" className={styles.appDownload}>Je choisis cette offre</Link></Button>
            </div>
          </div>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Business</h2>
            <p className={styles.cardDescription}>Le plus populaire</p>

            <ul className={styles.cardFeatures}>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
              <li className={styles.cardFeature}>
                Up to 5 users
                <CheckCircleIcon className={styles.cardFeatureIcon} />
              </li>
            </ul>
            <div className={styles.cardPrice}>
              <span className={styles.cardPriceNumber}>$49.99 / month</span>
              <Button colorScheme="blue" size="lg" className={styles.cardPriceButton}><Link to="./1" className={styles.appDownload}>Je choisis cette offre</Link></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prices;
