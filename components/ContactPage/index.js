"use client";
import { ContactForm } from "./ContactForm";
import styles from "./index.module.css";

const page = {
  title: "Contact Us",
  subTitle: ""
}


export const ContactPage = () => {
  return (
  <section
    className={styles.section}
    id="contact"
  >
    <h1>{page.title}</h1>

    <ContactForm/>

  </section>
  );
}