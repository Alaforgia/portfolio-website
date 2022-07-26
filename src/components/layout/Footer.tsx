import styles from "../layout/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
// import { faArrowup } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import Link from "next/link";

function Footer(): any {
  const topButtonHandler = (): any => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="25"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="black" stroke="black"></path>
      </svg>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="60"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg2}
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="black" stroke="black"></path>
      </svg>
      <footer className={styles.footer}>
        <div className={styles.social}>
          <Link href={"https://github.com/Alaforgia"} passHref>
            <a className={styles.giticon} target="_blank">
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/in/anthony-la-forgia-971932196/"} passHref>
            <a className={styles.linkedicon} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} fixedWidth />
            </a>
          </Link>
        </div>
        <div className={styles.copyright}>
          <FontAwesomeIcon icon={faCopyright} />
          <p>Tony La Forgia 2022</p>
        </div>
        <button className={styles.top} onClick={topButtonHandler}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </footer>
    </>
  );
}

export default Footer;
