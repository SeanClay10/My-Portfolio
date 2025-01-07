import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className = {styles.development} src={getImageUrl("about/continuous.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Exposure to Software Development Lifecycle</h3>
              <p>
              Experienced in full-stack development using React, PostgreSQL, and API integration, while leveraging Git version control and Agile methodology to manage team-based projects effectively.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Proficient in Back-End Development</h3>
              <p>
              Skilled in creating robust backend architectures using Node.js, Express, and RESTful APIs, with a focus on scalability and database optimization.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
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
