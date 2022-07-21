import React from "react";
import styles from "../about-details/AboutDetails.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";
import Link from "next/link";

function AboutDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <ShimmerImage src="/bunpic1.png" alt="personal picture" width={400} height={450} />
        <p className={styles.bunny}>Bunny</p>
      </div>
      <div className={styles.line}>
        <p></p>
      </div>
      <div className={styles.text_container}>
        <div className={styles.text}>
          <h2>Anthony &quot;Tony&quot; La Forgia</h2>
          <h5>Full-Stack Software Engineer</h5>
          <p>
            I decided to change careers to be a software engineer in November 2021 by completing an immersive education
            program at {""}
            <Link href="https://www.primeacademy.io/" passHref>
              <a className={styles.prime_link} target="_blank">
                Prime Digital Academy
              </a>
            </Link>
            {""} located in Minneapolis, MN. I am committed and love learning as much as I can!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
