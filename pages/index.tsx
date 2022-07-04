// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import About from "./About/index";
import Layout from "../src/components/layout/Layout";
import ProjectList from "../src/components/ui/ProjectList/ProjectList";
import HeroStyles from "../src/components/ui/hero-styles/HeroStyles";
import { useEffect, useState } from "react";
import type { IHomeProjectCard, IProjectCard } from "../src/types/index";
import homeData from "@src/data/homeData.json";

const projectsDefault: IHomeProjectCard[] = [
  {
    id: "",
    title: "",
    image: {
      domain: "",
    },
    description: "",
  },
];

interface IProps {
  projects: IHomeProjectCard[];
}

const HomePage = ({ projects }: IProps) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      {/* <style jsx global>
        {`
          body {
            background: ${isDark ? "darkslategray" : "black"};
          }
        `}
      </style> */}
      <Layout>
        <HeroStyles />
        <ProjectList projects={projects} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const projects: IHomeProjectCard[] = homeData.projects;
  return {
    props: {
      projects: projects,
      // projects: projects.map((project: any) => ({
      //   title: project.title,
      //   address: project.image,
      //   image: project.description,
      //   id: project._id.toString(),
      // })),
    },
    revalidate: 1,
  };
}
export default HomePage;
