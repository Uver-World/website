import styles from "../styles/index.module.css";

import React, {FunctionComponent} from "react";
import {useNavigate} from "react-router-dom";

type CardProps = {
  title: string;
  appFile: string;
  appName: string;
  version: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const Card: FunctionComponent<CardProps> = ({title, appFile, appName, version, isActive = false, children}) => {
  // const navigate = useNavigate();

  return (
    <article className={`${styles.card} dark:bg-slate-500 ${isActive ? `${styles.isActive} dark:bg-blue-500` : null}`}>
      <div className={styles.iconContainer}>
        { children }
        <h2 className={styles.subtitle}>{title}</h2>
      </div>

      <div className={styles.linkContainer}>
        <a href={appFile} download={appName} className={styles.appDownload}>Télécharger
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </a>
        <p className={`${styles.version} dark:text-slate-200 ${isActive ? styles.versionIsActive : null}`}>Version: {version}</p>
      </div>
    </article>
  );
}

export default Card;
