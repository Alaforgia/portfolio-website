import Layout from "../../components/layout/Layout";
import Image from "next/image";
import soloProjectPic1 from "../../../public/solo-project-pic1.png";
import soloProjectPic2 from "../../../public/solo-project-pic2.png";
import ProjectStyles from "../../components/project-style/ProjectStyles";

function Projects() {
  return (
    <>
      <Layout>
        <div>
          <h3>Projects w/ pictures and description</h3>
        </div>
        <ProjectStyles>
          <Image src={soloProjectPic1} alt="My Recipe View" layout={"intrinsic"} />
          <Image src={soloProjectPic2} alt="Recipe Detail View" layout={"intrinsic"} />
        </ProjectStyles>
      </Layout>
    </>
  );
}

export default Projects;
