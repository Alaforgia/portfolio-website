import React, { useEffect } from "react";
import styles from "./ProjectCard.module.css";
import classes from "./ProjectCard.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";
import { useRouter } from "next/router";
import data from "../../../data/data.json";
import type { IHomeProjectCard, IProjectCard } from "../../../types/index";
import { useState } from "react";

interface IProps {
  project: IHomeProjectCard;
}

function ProjectCard({ project }: IProps) {
  const router = useRouter();
  console.log("button id is: ", project.id);

  function projectDetailsHandler() {
    router.push("/" + project.id);
  }

  const [isSingleImage, setIsSingleImage] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [imageSrcs, setImageSrcs] = useState<string[]>([]);

  // useEffect(() => {
  //   if (project.image.domains.length === 1) {
  //     setIsSingleImage(true);
  //     if (typeof project.image.domains === "string") {
  //       setImageSrc(project.image.domains);
  //     }
  //   } else {
  //     setIsSingleImage(false);
  //     if (typeof project.image.domains !== "string") {
  //       setImageSrcs(project.image.domains);
  //     }
  //   }
  // }, [project.image.domains]);

  return (
    <div className={styles.card}>
      {/* {isSingleImage ? ( */}
        <ShimmerImage src={project.image.domain || "/STNpic.png"} alt={project.title} width={350} height={300} />
      
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
