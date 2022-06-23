import Layout from "../../components/layout/Layout";
import Image from "next/image";
import soloProjectPic1 from "../../../public/solo-project-pic1.png";
import soloProjectPic2 from "../../../public/solo-project-pic2.png";
import ProjectStyles from "../../components/ui/project-style/ProjectStyles";
import styles from "../../components/project-style/ProjectStyles.module.css";
import ShimmerImage from "../../utils/ShimmerImage";


function Projects(props: any) {
  return (
    <>
      <Layout>
        <div>
          <h3>Projects w/ pictures and description</h3>
        </div>
       <ShimmerImage src="/solo-project-pic1.png" alt="My Recipe View" width={380} height={430} />
       <ShimmerImage src="/solo-project-pic2.png" alt="Recipe Detail View" width={400} height={450} />
      </Layout>
    </>
  );
}

export default Projects;
