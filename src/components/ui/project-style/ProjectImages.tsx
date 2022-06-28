import React from "react";
import ShimmerImage from "../../../utils/ShimmerImage";
// import styles from "./ProjectStyles.module.css";
// import classes from "./ProjectStyles.module.css";
import { useRouter } from "next/router";

function ProjectImages() {
  const router = useRouter();

  function projectDetailsHandler() {
    router.push("/Projects");

    return (
      <>
        <ShimmerImage src="/STNpic.png" alt="Prime Group Project" width={400} height={450} />
        <ShimmerImage src="/solo-project-pic2.png" alt="Recipe Detail View" width={400} height={450} />
      </>
    );
  }
}

export default ProjectImages;
