import styles from '../../components/project-style/ProjectStyles2.module.css'

function ProjectStyles2(props: any) {
  return <div className={styles.images}>{props.children}</div>;
}

export default ProjectStyles2