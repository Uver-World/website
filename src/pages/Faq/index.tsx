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
            question: "Est-ce que je peux utiliser UverWorld avec une machine peu robuste?",
            answer: "Bien sûr! Tous les calculs qui seront nécessaires dans votre simulation sont faits sur nos serveurs et le rendu est ensuite renvoyé vers vous, l'utilisateur. Il vous suffit juste d'avoir une connexion stable.",
            open: false
        },
    ]);
    const [siteFaqs, setSiteFaqs] = useState([
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
        }
    ]);
    const [clientFaqs, setClientFaqs] = useState([
        {
            question:
                "Comment puis-je créer une simulation?",
            answer: "Pour créer votre première simulation il vous suffit d'installer le client UverWorld sur lequel vous aurez accès à tous nos outils pour pouvoir faire vos simulations.",
            open: false
        },
    ]);
    const [serverFaqs, setServerFaqs] = useState([
        {
            question:
                "abcdefghijklmnop",
            answer: "lorem ipsum",
            open: false
        }
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
