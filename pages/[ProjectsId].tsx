import Layout from "../src/components/layout/Layout";
import Image from "next/image";
import soloProjectPic1 from "../../../public/solo-project-pic1.png";
import soloProjectPic2 from "../../../public/solo-project-pic2.png";
import ProjectStyles from "../src/components/ui/ProjectList/ProjectList";
import styles from "../../components/project-style/ProjectStyles.module.css";
import ShimmerImage from "../src/utils/ShimmerImage";
import ProjectDetails from "../src/components/ui/project-details/ProjectDetails";
import TECH_PROJECTS from "@src/data/data.json";
import Head from "next/head";
import type { IProjectCard } from "@src/types";
import type { GetStaticProps } from "next";

interface IProps {
  projectData: IProjectCard;
}

function Projects({ projectData }: IProps) {
  return (
    <>
      {/* Image original width={829} height={1729} */}
      {/* <ShimmerImage src="/solo-project-pic1.png" alt="My Recipe View" width={829} height={1700} /> */}
      {/* <ShimmerImage src="/solo-project-pic2.png" alt="Recipe Detail View" width={829} height={1700} /> */}
      <Head>
        <title>{projectData.title}</title>
        <meta name="description" content={projectData.description} />
      </Head>
      <Layout>
        <ProjectDetails projectData={projectData} />
      </Layout>
    </>
  );
}
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { projectsId: "p1" } }, { params: { projectsId: "p2" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context): Promise<{ props: { projectData: IProjectCard } }> => {
  const projectId = context?.params?.projectsId;
  console.log("projectId = ", projectId);

  const projects: IProjectCard[] = TECH_PROJECTS.projects;
  const filteredProjects: IProjectCard[] = projects.filter((project) => {
    if (project.id === projectId) return true;
  });
  const selectedProject: IProjectCard = filteredProjects[0];

  return {
    props: {
      projectData: selectedProject,
    },
    // props: {
    //   projectData: {
    //     id: "p1",
    //     title: "Whose Recipe Is It Anyways?",
    //     image: {
    //       domains: ["/public/solo-project-pic1.png", "/public/solo-project-pic2.png"],
    //     },
    //     description: "Prime Solo Project Recipe App",
    //   },
    // },
  };
};

export default Projects;
