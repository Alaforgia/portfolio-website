import styles from "./ProjectList.module.css";
import classes from "./ProjectList.module.css";
import ShimmerImage from "../../../utils/ShimmerImage";
import soloProjectPic1 from "../../../public/solo-project-pic1.png";
import soloProjectPic2 from "../../../public/solo-project-pic2.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useRouter } from "next/router";

function ProjectStyles(props: any) {
  const router = useRouter();

  function projectDetailsHandler() {
    router.push("/" + props.id);
  }
  return (
    <>
      <ProjectCard />
      <div className={styles.container}>
        <div className={styles.images}>
          <ShimmerImage src="/STNpic.png" alt="Prime Group Project" width={400} height={450} />

          {/* Image original width={829} height={1729} */}
          <ShimmerImage src="/solo-project-pic2.png" alt="Recipe Detail View" width={400} height={450} />
          {/* <ShimmerImage src={props.image} alt={props.title} width={400} height={450} /> */}

          <div className={styles.middle}>
            <p className={styles.text}>Solo Project Recipe App</p>
            <p className={styles.subtext}>React.js/Redux/Tailwindcss</p>
            <button onClick={projectDetailsHandler} className={classes.btn}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectStyles;
