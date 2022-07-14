import React from "react";
import styles from "../about-details/AboutDetails.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";

function AboutDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <ShimmerImage src="/bunpic1.png" alt="personal picture" width={650} height={750} />
        <p className={styles.bunny}>Bunny</p>
      </div>
      <div className={styles.line}>
        <p></p>
      </div>
      <div className={styles.text}>
        <h2>Anthony &quot;Tony&quot; La Forgia</h2>
        <h5>Full-Stack Software Engineer</h5>
        <p>
          I changed careers to be a software engineer in November 2021. I completed an immersive education program at Prime
          Digital Academy located in Minneapolis, MN. I am committed and love learning as much as I can!
        </p>
      </div>
    </div>
  );
}

export default AboutDetails;
