import styles from "../project-style/ProjectStyles.module.css";

function ProjectStyles(props: any) {
  return <div className={styles.images}>{props.children}</div>;
}

export default ProjectStyles;
