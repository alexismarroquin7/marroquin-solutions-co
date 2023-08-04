"use client";
import { v4 as uuid } from "uuid";
import styles from "./index.module.css";

const page = {
  title: 'Boost Your Business with a Tailored Service Audit',
  description: `Enhance your local business's sales, customer experience, and reputation with our transformative "Service Audit" program. Gain valuable insights, discover customer-facing improvements, and boost your revenue for a brighter and more successful future.`,
  button: {
    text: "Get a Service Audit"
  }
}

export const LandingPage = () => {
  
  const handleClick = (e) => {
    
  }

  return (
    <section
      className={styles.section}
    >
      
      <div
        className={styles.card}
      >
        <h1>{page.title}</h1>

        <button
          onClick={handleClick}
        >{page.button.text}</button>
        
      </div>

      <div
        className={styles.image}
      ></div>

    </section>
  )
}