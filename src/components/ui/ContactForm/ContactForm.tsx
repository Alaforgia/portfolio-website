import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.contact_container}>
      <h3>Contact Me</h3>
      <div className={styles.forms}>
        <form></form>
        <form></form>
        <form></form>
        <form></form>
      </div>
    </div>
  );
}

export default ContactForm;
