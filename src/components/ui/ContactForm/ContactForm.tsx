import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.contact_container}>
      <h1>Contact Me</h1>
      <div className={styles.inputs}>
        <p>Name</p>
        <input type="text" placeholder="Name" />
        <p>E-Mail</p>
        <input type="text" placeholder="Email" />
        <p>Subject</p>
        <input type="text" placeholder="Subject" />
        <p>Message</p>
        <div className={styles.text_area}>
          <textarea placeholder="Message" />
        </div>
      </div>
      <button className={styles.btn}>Send</button>
    </div>
  );
}

export default ContactForm;
