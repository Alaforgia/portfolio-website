import Layout from "../../components/layout/Layout";
import Image from "next/image";
import soloProjectPic1 from '../../../public/solo-project-pic1.png'
import soloProjectPic2 from '../../../public/solo-project-pic2.png'

function Projects() {
  return (
    <Layout>
      <div>
        <h3>Projects w/ pictures and description</h3>
        <Image 
        src={soloProjectPic1}
        alt="My Recipe View"
        />
        <Image 
        src={soloProjectPic2}
        alt="Recipe Detail View"
        />
      </div>
    </Layout>
  );
}

export default Projects;
