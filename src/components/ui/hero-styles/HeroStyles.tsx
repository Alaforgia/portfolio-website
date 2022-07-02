import classes from "./HeroStyles.module.css";
import TypeAnimation from "react-type-animation";

function HeroStyles(props: any) {
  return (
    <>
      <div className={classes.hero_container}>
        <div className={classes.body}>
          <div className={classes.card}>
            <TypeAnimation className={classes.typing} cursor={true} sequence={[3000, "Hello.", 4000]} wrapper="h2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroStyles;
