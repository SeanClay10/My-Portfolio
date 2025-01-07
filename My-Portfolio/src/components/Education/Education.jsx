import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";
import courses from "../../data/courses.json";


export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <div className={styles.general_info}>
                    <div className={styles.school_image_container}>
                        <img
                            className={styles.osu_image}
                            src={getImageUrl("about/osu.png")}
                            alt="OSU logo"/>
                    </div>
                    <div className={styles.school_info_text}>
                        <h3>Degree:</h3>
                        <p>B.S. in Computer Science</p> <br/>
                        <h3>Specialization:</h3>
                        <p>Artificial Intelligence</p> <br/>
                        <h3>Expected Graduation Date:</h3>
                        <p>June 2026</p> <br/>
                        <h3>Cumulative GPA:</h3>
                        <p>3.86</p>
                    </div>
                </div>
                <div className={styles.courses_container}>
                    <h3>Relevant Coursework:</h3>
                    <ul className={styles.course_list}>{
                        courses.map((course, id) => {
                            return (
                                <li key={id} className={styles.course_item}>
                                    <span className={styles.course_name}>{course.title}</span>
                                    <span className={styles.course_grade}>{course.grade}</span>
                                </li>
                            );
                        })    
                    }</ul>
                </div>
            </div>
        </section>
    );
};

