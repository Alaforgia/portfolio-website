import React from 'react'
import styles from './ProjectDetails.module.css'

function ProjectDetails(props: any) {
  return (
    <div className={styles.container}>
      {props.children}
      <div className={styles.text}></div>
      </div>
  )
}

export default ProjectDetails