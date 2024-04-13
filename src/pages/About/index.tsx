import antoine from "../../assets/img/antoine.jpeg";
import benoit from "../../assets/img/benoit.jpg";
import clement from "../../assets/img/clement.jpg";
import hugo from "../../assets/img/hugo.jpg";
import matt from "../../assets/img/matt.jpg";
import paul from "../../assets/img/paulB.jpg";
import SolarSystem from "../../components/SolarSystem";
import styles from "./styles/index.module.css";
import { TimeLine } from "./timeline";

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
          Chez Uverworld, nous avons pour ambition de démocratiser l'accès aux
          simulations ciblées. Une façon plus simple et efficace de pouvoir
          imaginer le monde de demain, accessible à tous.
        </p>

        <h2 className={styles.title}>Quelle est notre solution ?</h2>

        <p className={styles.text}>
          Un logiciel modulable permettant de créer des simulations sur mesure
          par l'utilisateur sans intervention de la part d'un expert.
          L'utilisateur pourra simplement créer son propre logiciel de
          simulation à travers un système de nœuds permettant de moduler son
          outil sans aide de connaissances techniques. Dans le cas où
          l'utilisateur saurait programmer, il pourra même modifier ces nœuds en
          y ajoutant son propre code rendant sa solution encore plus
          personnalisable à travers l'utilisation du langage Python.
        </p>

        <h2 className={styles.title}>Timeline du projet</h2>

        <TimeLine />

        <h2 className={styles.title}>Notre équipe</h2>

        <p className={styles.text}></p>

        <ul className="grid grid-cols-3 gap-x-4 gap-y-8">
          <Member
            imgSrc={paul}
            name="Paul Compte"
            linkedin="https://www.linkedin.com/in/im-paul-comte/"
          >
            <li className="text-center">Chef de projet</li>
            <li className="text-center">Dévelopeur back-end</li>
            <li className="text-center">Dévelopeur Engine</li>
          </Member>

          <Member
            imgSrc={antoine}
            name="Antoine Atabey"
            linkedin="https://www.linkedin.com/in/antoine-atabey-328ab6208/"
          >
            <li className="text-center">Dévelopeur back-end</li>
            <li className="text-center">Dévelopeur Engine</li>
          </Member>

          <Member
            imgSrc={benoit}
            name="Benoît Brunet"
            linkedin="https://www.linkedin.com/in/beno%C3%AEt-brunet-1b759a173/"
          >
            <li className="text-center">Dévelopeur Logiciel</li>
            <li className="text-center">Dévelopeur back-end</li>
          </Member>

          <Member
            imgSrc={clement}
            name="Clément Ozor"
            linkedin="https://www.linkedin.com/in/clement-ozor/"
          >
            <li>Dévelopeur full-stack</li>
          </Member>

          <Member
            imgSrc={hugo}
            name="Hugo Gardes"
            linkedin="https://www.linkedin.com/in/hugo-gardes-505976204/"
          >
            <li>Dévelopeur logiciel</li>
          </Member>

          <Member
            imgSrc={matt}
            name="Matthew Fabrie"
            linkedin="https://www.linkedin.com/in/matthew-fabrie2307/"
          >
            <li className="text-center">Dévelopeur front-end</li>
            <li className="text-center">Dévelopeur logiciel</li>
          </Member>
        </ul>
      </div>
    </>
  );
};

const Member = ({
  name,
  imgSrc,
  children,
  linkedin,
}: React.PropsWithChildren<{
  name: string;
  imgSrc: string;
  linkedin: string;
}>) => {
  return (
    <li className="flex flex-col items-center">
      <img src={imgSrc} alt={name} className={styles.team} />

      <h2 className="mt-6 mb-3 text-2xl font-bold text-center">{name}</h2>

      <ul>{children}</ul>

      <a href={linkedin} target="_blank" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="mt-4 cursor-pointer lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    </li>
  );
};

export default About;
