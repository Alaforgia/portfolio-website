import React from "react";
import styles from "./ProjectDetails.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";
import type { IProjectCard } from "../../../types/index";

interface IProps {
  projectData: IProjectCard;
}

function ProjectDetails({ projectData }: IProps) {
  console.log("projectdata = ", projectData.image.domains[0]);

  return (
    <>
      <div className={styles.container}>
        {projectData.image.domains.map((image) => {
          return <ShimmerImage key={image} src={image} alt={projectData.title} width={400} height={450} />;
        })}

        {/* {typeof projectData.image.domains[0] === "string" && (
          <ShimmerImage src={projectData.image.domains[0]} alt={projectData.title} width={400} height={450} />
        )} */}
      </div>
      <div className={styles.text}>
        <h1>{projectData.title}</h1>
        <p>{projectData.description}</p>
      </div>
    </>
  );
}

export default ProjectDetails;
