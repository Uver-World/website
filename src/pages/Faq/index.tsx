import { useState } from "react";
import styles from "./styles/index.module.css";
import SolarSystem from "../../components/SolarSystem";

const Faq = () => {
    const [generalFaqs, setgeneralFaqs] = useState([
        {
            question: "Qu'est ce qu'est UverWorld?",
            answer:
                "UverWorld est un logiciel de simulation qui comprend un éditeur avec un asset store appelé marketplace, une partie code et blueprint et un moteur de rendu de simulation. Le but étant de faciliter la création de tous types de simulation.Une fois la simulation créée, l’utilisateur aura la possibilité de configurer des paramètres spécifiques afin d’affiner les résultats. Si l'ordinateur réalisant les calculs est limité, l’utilisateur pourra louer nos serveurs dédiés pour lancer la simulation et recevoir les résultats directement sur le logiciel.Le public cible de notre logiciel comprend majoritairement des scientifiques indépendants, des laboratoires de recherche et des entreprises externes qui facturent des prestations de simulations personnalisées, mais nous ciblons également les particuliers ou étudiants souhaitant réaliser des projets personnels.",
            open: false
        },
        {
            question: "Qui peut utiliser UverWorld?",
            answer:
                "UverWorld est disponible pour n'importe quelle entitée qui souhaite faire usage de notre moteur de rendu, que ce soit pour des raisons scientifiques, topologiques ou tout autre type de simulations, UverWorld est la solution pour vous !",
            open: false
        },
        {
            question: "Quels sont les avantages d'utiliser UverWorld par rapport à d'autres logiciels de simulation?",
            answer: "Les avantages principaux d'UverWorld sont premièrement le niveau de personalisation de vos simulations; une infinité de types de simulations sont possibles. De plus vos calculs seront éffectués sur nos serveurs contrairement à nos concurrents qui nécéssitent une machine puissante pour éffectuer ces calculs. Notre équipe est aussi un avantage, nos membres sont jeunes, dynamiques et motivés donc des améliorations sont à prévoir en grande quantité et qualité.",
            open: false
        },
        {
            question: "Quelles sont les ressources disponibles pour apprendre à utiliser UverWorld?",
            answer: "Nous prévoyons de travailler sur une version tutoriel pour apprendre à prendre UverWorld en main, en attendant n'ayez pas peur d'explorer le logiciel par vous même et à nous contacter en cas de besoin.",
            open: false
        },  
        {
            question: "Est-ce que je peux utiliser UverWorld avec une machine peu robuste?",
            answer: "Bien sûr! Tous les calculs qui seront nécessaires dans votre simulation sont faits sur nos serveurs et le rendu est ensuite renvoyé vers vous, l'utilisateur. Il vous suffit juste d'avoir une connexion stable.",
            open: false
        },
        {
            question: "Je rencontre des problèmes lors de l'installation d'uverworld, que faire?",
            answer: "Pas d'inquiétude! Rendez vous sur la page 'Contact' et un membre de notre équipe technique reprendra rappidement contact avec vous.",
            open: false
        },
        {
            question: "Je rencontre des problèmes lors de l'utilisation d'uverworld, que faire?",
            answer: "Pas d'inquiétude! Rendez vous sur la page 'Contact' et un membre de notre équipe technique reprendra rappidement contact avec vous.",
            open: false
        },
        {
            question: "Comment puis-je contacter l'équipe d'UverWorld pour obtenir de l'aide?",
            answer: "Rendez vous sur la page 'Contact' et un membre de notre équipe technique reprendra rappidement contact avec vous.",
            open: false
        },
        {
            question:
                "Quelles sont les conditions générales d'utilisation d'UverWorld?",
            answer: "Pour l'instant, seulement quelques personnes ont accès à UverWorld avec notre accord, une fois que UverWorld sortira de son statut de Beta, des conditions générales d'utilisation et de vente seront crées.",
            open: false
        },
    ]);
    const [siteFaqs, setSiteFaqs] = useState([
        {
            question:
                "Comment puis-je créer un compte sur UverWorld?",
            answer: "Pour vous créer un compte UverWorld, il vous suffira de vous inscrire sur le site en cliquant sur le bouton 's'inscrire' en haut à droite, vos données seront ensuite synchronisées et vous aurez accès à votre compte sur le site ainsi que sur le client.",
            open: false
        },
        {
            question:
                "Comment Est-ce que je peux télécharger le client UverWorld?",
            answer: "Pour installer le client UverWorld il vous suffira d'acheter une license et d'appuyer sur le bouton 'Download' sur votre page profil.",
            open: false
        },
        {
            question:
                "Comment est-ce que je peux acheter une license?",
            answer: "Pour acheter une license, rendez vous sur la page 'Tarifs' dans la barre de navigation. Choissisez l'option qui vous correspond le mieux et une fois le payement complété vous aurez accès au logiciel UverWorld.",
            open: false
        },
        {
            question:
                "Quel est le prix d'une license?",
            answer: "Le prix de la license dépendra de votre besoin, plusieurs types de licenses seront disponibles prochainement et les prix de ceux-ci ne sont pas encore définis.",
            open: false
        },
        {
            question:
                "Comment puis-je accéder aux mises à jour d'UverWorld?",
            answer: "Nous prévoyons d'ajouter une page 'news' pour vous communiquer toutes les mises à jour et toutes les nouvelles concernant UverWorld. Il suffira de faire une mise à niveau sur le site et vous serez de nouveau à jour avec la dernière version d'UverWorld.",
            open: false
        },
    ]);
    const [clientFaqs, setClientFaqs] = useState([
        {
            question:
                "Comment puis-je créer une simulation?",
            answer: "Pour créer votre première simulation il vous suffit d'installer le client UverWorld sur lequel vous aurez accès à tous nos outils pour pouvoir faire vos simulations.",
            open: false
        },
        {
            question:
                "Est-ce que je dois recréer ma simulation à chaque utilisation?",
            answer: "Non pas d'inquiétudes! Vous pouvez directement exporter votre simulation grâce à notre système de sauvegardes et la re-importer plus tard quand vous souhaitez travailler dessus.",
            open: false
        },
        {
            question:
                "Comment puis-je importer des données dans UverWorld?",
            answer: "Vous pouvez directement importer des fichiers JSON qui contiendront toutes les données de votre simulation. Vous pouvez aussi importer des modèles pour les modifier et les visualiser dans la section 'Models' du client",
            open: false
        },
        {
            question:
                "Comment puis-je partager mes simulations avec d'autres personnes?",
            answer: "En sauvegardant votre fichier dans le client, un fichier JSON sera crée avec toutes les informations nécessaires pour charger votre simulation sur n'importe quelle autre machine.",
            open: false
        },
        {
            question:
                "Comment puis-je signaler un bug lors de l'utilisation du client?",
            answer: "Rendez vous sur la page 'Contact' et un membre de notre équipe technique reprendra rappidement contact avec vous pour résoudre le problème.",
            open: false
        },
    ]);
    const [serverFaqs, setServerFaqs] = useState([
        {
            question:
                "Quelle charge est-ce que le serveur peut soutenir?",
            answer: "Le serveur est actuellement en capacité de soutenir une simulation contenant plus d'un million d'entités en simultanée, avec le temps ceci évoluera.",
            open: false
        },
        {
            question:
                "Quelle vitesse de téléchargement est recommandée pour avoir un bon rendu visuel de la simulation?",
            answer: "Pour uniquement visualiser la simulation il faudra une connexion assez basique, 8Mbps suffiront mais si vous comptez intéragir avec la simulation (se déplacer, zoomer...) il vous faudra une connexion assez stable d'envirront 50Mbps.",
            open: false
        },
        {
            question:
                "Est-ce que ma distance géographique impacte le rendu de la simulation?",
            answer: "Pour l'instant tous nos serveurs sont hébergés en Europe de l'ouest donc si vous êtes en Asie ou aux Etats unis vous aurez plus de latence, dans le futur nous comptons héberger des serveurs partout autour du monde pour que le temps de latence soit faible peu importe votre emplacement.",
            open: false
        },
        {
            question:
                "Est-ce que je peux héberger un serveur local?",
            answer: "C'est une option qui n'est pas encore disponible pour l'instant mais c'est une des features que nous comptons réaliser dans un futur très proche.",
            open: false
        },
    ]);

    const toggleGeneralFAQ = (index: number) => {
        setgeneralFaqs(
            generalFaqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    const toggleSiteFAQ = (index: number) => {
        setSiteFaqs(
            siteFaqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    const toggleClientFAQ = (index: number) => {
        setClientFaqs(
            clientFaqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    const toggleServerFAQ = (index: number) => {
        setServerFaqs(
            serverFaqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <SolarSystem/>
                <h1 className={styles.title}>FAQs</h1>
                <p className={styles.subtitle}>Vous avez des questions? Nous avons des réponses !</p>
            </div>
            <div className={styles.faqs}>
                <h2 className={styles.h2}>Général</h2>
                {generalFaqs.map((faq, index) => (
                    <div
                        className={`${styles.faq} ${faq.open ? styles.open : ""}`}
                        key={index}
                        onClick={() => toggleGeneralFAQ(index)}
                    >
                        <div className={styles.question}>{faq.question}</div>
                        <div className={styles.answer}>{faq.answer}</div>
                    </div>
                ))}
                <h2 className={styles.h2}>Site</h2>
                {siteFaqs.map((faq, index) => (
                    <div
                        className={`${styles.faq} ${faq.open ? styles.open : ""}`}
                        key={index}
                        onClick={() => toggleSiteFAQ(index)}
                    >
                        <div className={styles.question}>{faq.question}</div>
                        <div className={styles.answer}>{faq.answer}</div>
                    </div>
                ))}
                <h2 className={styles.h2}>Client</h2>
                {clientFaqs.map((faq, index) => (
                    <div
                        className={`${styles.faq} ${faq.open ? styles.open : ""}`}
                        key={index}
                        onClick={() => toggleClientFAQ(index)}
                    >
                        <div className={styles.question}>{faq.question}</div>
                        <div className={styles.answer}>{faq.answer}</div>
                    </div>
                ))}
                <h2 className={styles.h2}>Serveur</h2>
                {serverFaqs.map((faq, index) => (
                    <div
                        className={`${styles.faq} ${faq.open ? styles.open : ""}`}
                        key={index}
                        onClick={() => toggleServerFAQ(index)}
                    >
                        <div className={styles.question}>{faq.question}</div>
                        <div className={styles.answer}>{faq.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
