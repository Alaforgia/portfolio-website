import classes from "./Layout.module.css";
import Navigation from "./Navigation";
import { useState } from "react";
import Footer from "./Footer";

function Layout(props: any) {
  const [isDark, setIsDark] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className={classes.layout}>
      {/* <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} /> */}
      <main className={classes.main}>{props.children}</main>
      <Footer />
      {/* <style jsx global>
        {`
          body {
            background: ${isDark ? "darkslategray" : "black"};
          }
        `}
      </style> */}
    </div>
  );
}

export default Layout;
