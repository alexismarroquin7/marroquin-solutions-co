"use client";
import { v4 as uuid } from "uuid";
import styles from "./index.module.css";

const page = {
  title: 'Cruise with Confidence: Professional Mobile Car Wash Services!',
  description: `Experience the ultimate convenience of a top-notch car wash right at your doorstep! Our mobile car wash experts are equipped with the latest eco-friendly technologies and premium products to give your beloved vehicle the care it deserves. From exterior shine to interior freshness, we'll have your car looking and smelling like new. Trust us to revitalize your ride while you relax and enjoy the convenience of our mobile service.`,
  buttons: [
    {
      id: uuid(),
      name: "primary",
      text: "Book a Wash Now"
    }, 
    {
      id: uuid(),
      name: "secondary",
      text: "See Our Results"
    }
  ]
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
        <div
          className={styles.container}
        >
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>

        <div
          className={styles.container}
        >
          {page.buttons.map(button => {
            return (
              <button
                key={button.id}
                name={button.name}
                onClick={handleClick}
              >{button.text}</button>
            )
          })}
        </div>
      </div>
    </section>
  )
}