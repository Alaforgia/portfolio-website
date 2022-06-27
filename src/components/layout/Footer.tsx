import styles from "../layout/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

function Footer(): any {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <FontAwesomeIcon icon={faCopyright} />
          <p>Tony La Forgia</p>
        </div>
        <div className={styles.social}>
          <Link href={"https://github.com/Alaforgia"}>
            <div className={styles.giticon}>
              <FontAwesomeIcon icon={faGithub} fixedWidth />
            </div>
          </Link>
          <div className={styles.linkedicon}>
            <Link href={"https://www.linkedin.com/in/anthony-la-forgia-971932196/"}>
              <FontAwesomeIcon icon={faLinkedin} fixedWidth />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
