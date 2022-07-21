import classes from "./Navigation.module.css";
import styles from "./Navigation.module.css";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

function Navigation({ isNavOpen, setIsNavOpen }: any) {
  const onClickHandler = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <div className={isNavOpen ? "top-0" : "top-minus-full"}>
        {isNavOpen ? "top-0" : "top-minus-full"}
        <header className={classes.header}>
          <div className={classes.logo}>Tony La Forgia</div>
          <HamburgerMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} onClick={onClickHandler}>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/About">About</Link>
                </li>
                <li>
                  <Link href="/Contact">Contact Me</Link>
                </li>
              </ul>
            </nav>
          </HamburgerMenu>
        </header>
      </div>
    </>
  );
}

export default Navigation;
