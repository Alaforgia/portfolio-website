import React from "react";
import styles from "../about-details/AboutDetails.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";

function AboutDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <ShimmerImage src="/bunpic1.png" alt="personal picture" width={400} height={450} />
      </div>
      <h3 className={styles.text}>My name is Anthony &quot;Tony&quot; La Forgia</h3>
    </div>
  );
}

export default AboutDetails;
