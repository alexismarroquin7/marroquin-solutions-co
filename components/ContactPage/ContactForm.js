"use client";
import { useEffect, useState } from "react";

import styles from "./ContactForm.module.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: ""
}

export const ContactForm = () => {
  const [ready, setReady] = useState(false);
  const [values, setValues] = useState(initialValues);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }


  useEffect(() => {
    if(typeof window !== "undefined") {
      setReady(true);
    }
  }, []);

  return !ready ? (
    ""
  ) : (
  <form
    className={`glass ${styles.form}`}
    onSubmit={handleSubmit}
  >
    <label
      htmlFor="firstName"
      className={styles.label}
    >First Name:
      <input
        className={styles.input}
        onChange={handleChange}
        name="firstName"
        value={values.firstName}
        id="firstName"
        type="text"
      />
    </label>
    <label
      htmlFor="lastName"
      className={styles.label}
    >Last Name:
      <input
        className={styles.input}
        onChange={handleChange}
        name="lastName"
        value={values.lastName}
        id="lastName"
        type="text"
      />
    </label>
    <label
      htmlFor="email"
      className={styles.label}
    >Email:
      <input
        className={styles.input}
        onChange={handleChange}
        name="email"
        value={values.email}
        id="email"
        type="email"
      />
    </label>
    <label
      htmlFor="phoneNumber"
      className={styles.label}
    >Phone Number:
      <input
        className={styles.input}
        onChange={handleChange}
        name="phoneNumber"
        value={values.phoneNumber}
        id="phoneNumber"
        type="tel"
      />
    </label>
    <label
      htmlFor="message"
      className={styles.label}
    >Message:
      <textarea
        className={styles.textarea}
        rows={5}
        onChange={handleChange}
        name="message"
        value={values.message}
        id="message"
        type="text"
      />
    </label>
    <button
      type="submit"
    >Send</button>
  </form>
  )
}