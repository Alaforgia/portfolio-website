import React from "react";
import styles from "./ProjectCard.module.css";
import classes from "./ProjectCard.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";
import { useRouter } from "next/router";

function ProjectCard(props: any) {
  const router = useRouter();

  function projectDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <div className={styles.card}>
      <ShimmerImage src={props.image || "/STNpic.png"} alt={props.title} width={350} height={300} />
      <div className={styles.middle}>
        <p className={styles.text}>Solo Project Recipe App</p>
        <p className={styles.subtext}>React.js/Redux/Tailwindcss</p>
        <button onClick={projectDetailsHandler} className={classes.btn}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
