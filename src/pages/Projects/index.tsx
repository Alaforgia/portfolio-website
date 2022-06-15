import Layout from "../../components/layout/Layout";
import Image from "next/image";
import profilePic from '../../../public/solo-project-pic1.png'

function Projects() {
  return (
    <Layout>
      <div>
        <h3>Projects w/ pictures and description</h3>
        <Image 
        src={profilePic}
        alt="Picture of Recipe App Solo Project"
        />
      </div>
    </Layout>
  );
}

export default Projects;
