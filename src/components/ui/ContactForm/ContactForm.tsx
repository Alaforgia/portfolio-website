import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.contact_container}>
      <h3>Contact Me</h3>
      <div className={styles.inputs}>
      <input type="text"></input>
      <input type="text"></input>
      <input type="text"></input>
      <input type="text"></input>
      </div>
    </div>
  );
}

export default ContactForm;
