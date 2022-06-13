import classes from "./Navigation.module.css";
import Link from "next/link";
function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Tony La Forgia</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
