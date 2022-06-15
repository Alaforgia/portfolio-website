import Layout from "../../components/layout/Layout";
import Image from "next/image";
import profilePic from '../../../public/Screen Shot 2022-04-04 at 8.54.29 AM.png'

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
