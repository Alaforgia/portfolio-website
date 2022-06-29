// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import About from "./About/index";
import Layout from "../components/layout/Layout";
import ProjectStyles from "../components/ui/project-style/ProjectStyles";
import HeroPage from "./HeroPage";
import { useState } from "react";

const HomePage = (props: any) => {
  const [isDark, setIsDark] = useState(false);

  const TECH_PROJECTS = [
    {
      id: "p1",
      title: "Whose Recipe Is It Anyways?",
      image: {
        domains: ["/public/solo-project-pic1.png", "/public/solo-project-pic2.png"],
      },
      description: "Prime Solo Project Recipe App",
    },
    {
      id: "p2",
      title: "Stronger Together Now Connect App ",
      image: {
        domains: ["/public/STNpic.png"],
      },
      description: "Prime Group Project",
    },
  ];

  return (
    <>
      <style jsx global>
        {`
          body {
            background: ${isDark ? "darkslategray" : "black"};
          }
        `}
      </style>
      <Layout>
        <HeroPage />
        <ProjectStyles projects={props.projects} />
      </Layout>
    </>
  );
};

// export async function getStaticProps(projects: any) {
//   return {
//     props: {
//       projects: projects.map((project: any) => ({
//         title: project.title,
//         address: project.image,
//         image: project.description,
//         id: project._id.toString(),
//       })),
//     },
//     revalidate: 1,
//   };
// }
export default HomePage;
