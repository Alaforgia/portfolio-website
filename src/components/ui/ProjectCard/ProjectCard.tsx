import styles from "./ProjectCard.module.css";
import classes from "./ProjectCard.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";
import { useRouter } from "next/router";
import type { IHomeProjectCard, IProjectCard } from "../../../types/index";


interface IProps {
  project: IHomeProjectCard;
}

function ProjectCard({ project }: IProps) {
  const router = useRouter();
  console.log("button id is: ", project.id);

  function projectDetailsHandler() {
    router.push("/" + project.id);
  }

  return (
    <div className={styles.card}>
        <ShimmerImage src={project.image.domain} alt={project.title} width={350} height={300} />
      
      <div className={styles.middle}>
        <p className={styles.text}>{project.title}</p>
        <p className={styles.subtext}>{project.description}</p>
        <button onClick={projectDetailsHandler} className={classes.btn}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
