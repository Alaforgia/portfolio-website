import classes from "../ui/HeroStyles.module.css"
import React from "react";

function HeroStyles(props: any) {
  return <div className={classes.card}>{props.children}</div>;
}

export default HeroStyles;
