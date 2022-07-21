import styles from "./ProjectList.module.css";
import classes from "./ProjectList.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";
import soloProjectPic1 from "../../../public/solo-project-pic1.png";
import soloProjectPic2 from "../../../public/solo-project-pic2.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import TECH_PROJECTS from "../../../data/data.json";
import { useRouter } from "next/router";
import type { IHomeProjectCard, IProjectCard } from "@src/types";
interface IProps {
  projects: IHomeProjectCard[];
}
function ProjectStyles({ projects }: IProps) {
  const router = useRouter();
  console.log(projects);

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Projects</p>
        <div className={styles.projectlist}>
          {projects.map((card) => {
            return <ProjectCard key={card.id} project={card} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectStyles;
