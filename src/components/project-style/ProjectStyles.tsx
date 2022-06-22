import styles from "../project-style/ProjectStyles.module.css";
import ShimmerImage from "../../utils/ShimmerImage";
import soloProjectPic1 from "../../../public/solo-project-pic1.png";
import soloProjectPic2 from "../../../public/solo-project-pic2.png";

function ProjectStyles(props: any) {
  return (
    <>
      <div className={styles.images}>
        {/* Image original width={829} height={1729} */}
        <ShimmerImage src="/solo-project-pic1.png" alt="My Recipe View" width={629} height={1092} />
        <ShimmerImage src="/solo-project-pic2.png" alt="Recipe Detail View" width={629} height={1092} />
        <div className={styles.middle}>
          <p className={styles.text}>Solo Project Recipe App</p>
          <p className={styles.subtext}>React.js/Redux/Tailwindcss</p>
        </div>
      </div>
    </>
  );
}

export default ProjectStyles;
