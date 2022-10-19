import styles from './styles/index.module.css'

const About = () => {
  return (
    <p className={styles.text}>
      Nous avons crée Uverworld pour aider les chercheurs, les étudiants et les experts dans tous les domaines. A ce jour,
      aucun outil permettant de créer des simulations soi-même sans compétences informatiques poussées n'est disponible sur
      le marché. Chez Uverworld, nous avons pour ambition de démocratiser l'accès aux simulations ciblées. Une façon plus
      simple et éfficace de pouvoir imaginer le monde de demain, accéssible à tous. Quelle est notre solution? Un logiciel
      modulable permettant de créer des simulations sur mesure par l'utilisateur sans intervention de la part d'un expert.
      L'utilisateur pourra simplèment créer son propre logiciel de simulation à travers un système de nodes permettant de
      moduler son outil sans aide de connaissances techniques. Dans le cas ou l'utilisateur sait programmer, il pourra même
      modifier ces nodes en y ajoutant son propre code rendant sa solution encore plus personalisable à travers l'utilisation
      du language Python.
      <br/><br/>
      Qui sommes nous? Une équipe de 9 développeurs motivés et passionnés par l'informatique et le monde de la simulation.
    </p>
  )
}

export default About;