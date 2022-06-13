import classes from "./Navigation.module.css";
import Link from "next/link";
function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Projects</div>
      <nav>
        <ul>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
