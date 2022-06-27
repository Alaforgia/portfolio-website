import styles from "../layout/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer(): any {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.social}>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        Footer
      </footer>
    </>
  );
}

export default Footer;
