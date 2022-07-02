import classes from "./HeroStyles.module.css";
import TypeAnimation from "react-type-animation";

function HeroStyles(props: any) {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.card}>
          <TypeAnimation className={classes.typing} cursor={true} sequence={[3000, "Hello.", 4000]} wrapper="h2" />
        </div>
      </div>
    </>
  );
}

{
  /* <h3>Photo?</h3> */
}
{
  /* <div>
  <h3>Projects/Journey</h3>
</div>
<div>
  <h3>Small blurb + link</h3>
</div> */
}
export default HeroStyles;
