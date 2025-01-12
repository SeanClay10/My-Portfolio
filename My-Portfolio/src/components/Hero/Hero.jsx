import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sean!</h1>
        <p className={styles.description}>
        Welcome to my portfolio! I’m a third-year Computer Science student at Oregon State University, specializing in Artificial Intelligence and Machine Learning.
        </p>
        <p className={styles.reachOut}>
        Feel free to reach out!
        </p>
        <a href="mailto:zweihander555@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/portrait.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
