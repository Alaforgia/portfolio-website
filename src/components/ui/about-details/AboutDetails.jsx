import React from "react";
import styles from "../about-details/AboutDetails.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";

function AboutDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <ShimmerImage src="/bunpic1.png" alt="personal picture" width={400} height={450} />
        <p className={styles.bunny}>Bunny</p>
      </div>
      <div className={styles.text}>
        <h2>Anthony &quot;Tony&quot; La Forgia</h2>
        <h5>Full-Stack Software Engineer</h5>
        <p>
          I am new to the software engineering space having recently completed an immersive learning program at Prime
          Digital Academy located in Minneapolis, MN{" "}
        </p>
      </div>
    </div>
  );
}

export default AboutDetails;
