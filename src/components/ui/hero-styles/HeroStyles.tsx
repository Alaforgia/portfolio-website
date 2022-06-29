import classes from "./HeroStyles.module.css";
import React from "react";

function HeroStyles(props: any) {
  return (
    <div className={classes.body}>
      <div className={classes.card}>
        <div>
          <h1>HI. I&apos;m Tony. A Software Engineer</h1>
          <h3>Photo?</h3>
        </div>
        <div>
          <h3>Projects/Journey</h3>
        </div>
        <div>
          <h3>Small blurb + link</h3>
        </div>
      </div>
    </div>
  );
}

export default HeroStyles;
