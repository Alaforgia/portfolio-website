import React from "react";
import styles from "./ProjectDetails.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";

function ProjectDetails(props: any) {
  return (
    <>
      <div className={styles.container}>
        {/* <ShimmerImage src="/solo-project-pic1.png" alt="Prime Solo Project Recipe App" width={400} height={450} /> */}
        <ShimmerImage src={props.image} alt={props.title} width={400} height={450} />
      </div>
      <div className={styles.text}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default ProjectDetails;
