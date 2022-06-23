import classes from "./Layout.module.css";
import Navigation from "./Navigation";
import { useState } from "react";

function Layout(props: any) {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
      <style jsx global>
        {`
          body {
            background: ${isDark ? "darkslategray" : "black"};
          }
        `}
      </style>
    </div>
  );
}

export default Layout;
