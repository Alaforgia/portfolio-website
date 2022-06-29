import Layout from "../../components/layout/Layout";
import Image from "next/image";
import soloProjectPic1 from "../../../public/solo-project-pic1.png";
import soloProjectPic2 from "../../../public/solo-project-pic2.png";
import ProjectStyles from "../../components/ui/project-style/ProjectStyles";
import styles from "../../components/project-style/ProjectStyles.module.css";
import ShimmerImage from "../../utils/ShimmerImage";
import ProjectDetails from "../../components/ui/project-details/ProjectDetails";

function Projects(props: any) {
  return (
    <>
      {/* Image original width={829} height={1729} */}
      {/* <ShimmerImage src="/solo-project-pic1.png" alt="My Recipe View" width={829} height={1700} /> */}
      {/* <ShimmerImage src="/solo-project-pic2.png" alt="Recipe Detail View" width={829} height={1700} /> */}
      <Layout>
        <div>
          <h3>Projects w/ pictures and description</h3>
        </div>
        <ProjectDetails
          // image={props.projectData.image}
          // title={props.projectData.title}
          // description={props.projectData.description}
        />
      </Layout>
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     fallback: false,

//     // paths: projectId.map((project: any) => ({
//     //   params: { projectID: project._id.toString() },
//     // })),

//     paths: [
//       {
//         params: {
//           projectId: "p1",
//         },
//       },
//       {
//         params: {
//           projectId: "p2",
//         },
//       },
//     ],
//   };
// }

// export async function getStaticProps(context: any): Promise<{
//   props: { projectData: { id: string; title: string; image: { domains: string[] }; description: string } };
// }> {
//   const projectId = context.params.projectId;

//   return {
//     props: {
//       projectData: {
//         id: "p1",
//         title: "Whose Recipe Is It Anyways?",
//         image: {
//           domains: ["/public/solo-project-pic1.png", "/public/solo-project-pic2.png"],
//         },
//         description: "Prime Solo Project Recipe App",
//       },
//     },
//   };
// }
export default Projects;
