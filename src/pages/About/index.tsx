import styles from './styles/index.module.css'
import team from '../../assets/img/team.jpg'
import SolarSystem from "../../components/SolarSystem";

const About = () => {
  return (
    <>
      <div className={styles.hero}>
        <SolarSystem />
        <span>Découvrez</span>
        <h1>Notre histoire</h1>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Chez Uverworld, nous avons pour ambition de démocratiser l'accès aux simulations ciblées. Une façon plus
          simple et efficace de pouvoir imaginer le monde de demain, accessible à tous.
        </p>

        <h2 className={styles.title}>Quelle est notre solution ?</h2>

        <p className={styles.text}>
          Un logiciel modulable permettant de créer des simulations sur mesure par l'utilisateur sans intervention de la part d'un expert. L'utilisateur pourra simplèment créer son propre logiciel de simulation à travers un système de nodes permettant de moduler son outil sans aide de connaissances techniques. Dans le cas ou l'utilisateur sait programmer, il pourra même modifier ces nodes en y ajoutant son propre code rendant sa solution encore plus personalisable à travers l'utilisation du language Python.
        </p>

        <h2 className={styles.title}>Notre équipe</h2>

        <p className={styles.text}>
          Nous sommes une équipe de 9 développeurs motivés et passionnés par l'informatique et le monde de la simulation.
        </p>

        <img src={team} alt="Notre équipe" className={styles.team} />
      </div>
    </>
  )
}

export default About;