import styles from './styles/index.module.css'
import team from '../../assets/img/team.jpg'
import SolarSystem from "../../components/SolarSystem";

const About = () => {
  return (
    <>
      <div className={styles.hero}>
        <SolarSystem />
        {/*<span>Découvrez</span>*/}
        <h1>À propos</h1>
      </div>
      <div className={styles.container}>
        <p className={styles.text}>
          Chez Uverworld, nous avons pour ambition de démocratiser l'accès aux simulations ciblées. Une façon plus
          simple et efficace de pouvoir imaginer le monde de demain, accessible à tous.
        </p>

        <h2 className={styles.title}>Quelle est notre solution ?</h2>

        <p className={styles.text}>
          Un logiciel modulable permettant de créer des simulations sur mesure par l'utilisateur sans intervention de la part d'un expert. L'utilisateur pourra simplement créer son propre logiciel de simulation à travers un système de nœuds permettant de moduler son outil sans aide de connaissances techniques. Dans le cas où l'utilisateur saurait programmer, il pourra même modifier ces nœuds en y ajoutant son propre code rendant sa solution encore plus personnalisable à travers l'utilisation du langage Python.
        </p>

        <h2 className={styles.title}>Notre équipe</h2>

        <p className={styles.text}>

        </p>

        <img src={team} alt="Notre équipe" className={styles.team} />
      </div>
    </>
  )
}

export default About;