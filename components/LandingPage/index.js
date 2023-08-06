"use client";

import styles from "./index.module.css";

const page = {
  title: "Using *Data-Driven* Insights to *Unlock* Your Business Potential.",
  description: 'Delight Customers, Boost Reviews, and Maximize Sales.',
  button: {
    text: "Get Started"
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
        className={`glass glow ${styles.card}`}
      >
        <h1>
          {page.title.split('*').map((string, i) => {
            return i % 2 === 0
            ? string
            : <span key={string} className="highlight">{string}</span>
          })}
        </h1>
        <p
          className={styles.description}
        >{page.description}</p>

        <button
          onClick={handleClick}
        >{page.button.text}</button>
        
      </div>

      {/* <div
        className={styles.image}
      ></div> */}

    </section>
  )
}