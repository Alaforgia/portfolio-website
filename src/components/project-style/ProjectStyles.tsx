import classes from '../project-style/ProjectStyles.module.css'

function ProjectStyles(props: any) {
  return <div className={classes.images}>{props.children}</div>;
}

export default ProjectStyles;
