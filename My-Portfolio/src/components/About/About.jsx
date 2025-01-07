import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className = {styles.aboutMe}
          src={getImageUrl("about/capability.png")}
          alt="Random image"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className = {styles.development} src={getImageUrl("about/cycle.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Exposure to Software Development Lifecycle</h3>
              <p>
              Experienced in full-stack development using React, PostgreSQL, and API integration, while leveraging Git version control and Agile methodology to manage team-based projects effectively.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className = {styles.database} src={getImageUrl("about/database.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Proficient in Back-End Development</h3>
              <p>
              Skilled in creating robust backend architectures using Node.js, Express, and low-level programming languages, with a focus on scalability and modular design.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className = {styles.algorithm} src={getImageUrl("about/numbers.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Hands-On Experience with Advanced Algorithms</h3>
              <p>
              Designed and analyzed efficient algorithms in C++ for projects, optimizing performance through the use of advanced data structures and algorithmic techniques.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
