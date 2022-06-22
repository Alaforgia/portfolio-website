import styles from "../project-style/ProjectStyles.module.css";
import Image from "next/image";
import soloProjectPic1 from "../../../public/solo-project-pic1.png";
import soloProjectPic2 from "../../../public/solo-project-pic2.png";

function ProjectStyles(props: any) {
  return (
    <>
      <div className={styles.images}>
        <Image src={soloProjectPic1} alt="My Recipe View" layout={"intrinsic"} />
        <Image src={soloProjectPic2} alt="Recipe Detail View" layout={"intrinsic"} />
      <div className={styles.middle}>
        <div className={styles.text}>hello</div>
      </div>
      </div>
    </>
  );
}

export default ProjectStyles;
