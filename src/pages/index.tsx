// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import About from "./About/index";
import Layout from "../components/layout/Layout";
import ProjectStyles from "../components/ui/project-style/ProjectStyles";
import HeroPage from "./HeroPage";
import { useState } from "react";

const HomePage = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
     <style jsx global>{`
        body {
          background: ${isDark ? "darkslategray" : "black"};
        }
      `}
      </style>
      <Layout>
        <HeroPage />
        <ProjectStyles />
      </Layout>
    </>
  );
};

export default HomePage;
