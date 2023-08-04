"use client";
import { v4 as uuid } from "uuid";
import styles from "./index.module.css";
import { ServiceCard } from "./ServiceCard";

const page = {
  title: 'Services',
  description: `Here's what we offer.`,
  services: [
    {
      id: uuid(),
      title: `Basic Package`,
      description: `This entry-level package includes a *thorough exterior car wash* and a *basic interior cleaning* to give the car a clean and shiny appearance.`,
      frequency: "1 wash (monthly)",
      price: 25,
      features: [
        {
          id: uuid(),
          name: "thorough exterior car wash"
        },
        {
          id: uuid(),
          name: "basic interior cleaning"
        },
      ]
    }, 
    {
      id: uuid(),
      title: `Premium Package`,
      description: `The premium package includes everything in the Basic Package plus additional services like waxing, tire shine, and interior vacuuming.`,
      frequency: "2 washes (bi-weekly)",
      price: 45,
      features: [
        {
          id: uuid(),
          name: "everything in the Basic Package"
        },
        {
          id: uuid(),
          name: "waxing"
        },
        {
          id: uuid(),
          name: "tire shine"
        },
        {
          id: uuid(),
          name: "interior vacuuming"
        },
      ]
    }, 
    {
      id: uuid(),
      title: `Platinum Package`,
      description: `The Platinum Package offers a comprehensive car detailing service, including waxing, tire shine, interior deep cleaning, upholstery treatment, and window cleaning.`,
      frequency: "4 washes (weekly)",
      price: 100,
      features: [
        {
          id: uuid(),
          name: "everything in the Premium Package"
        },
        {
          id: uuid(),
          name: "interior deep cleaning"
        },
        {
          id: uuid(),
          name: "upholstery treatment"
        },
        {
          id: uuid(),
          name: "window cleaning"
        },
      ]
    }, 
  ]
}

export const ServicesPage = () => {
  
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
          <p>
            {page.description}
          </p>
        </div>

        <div
          className={styles.container}
        >
          {page.services.map(service => (
            <ServiceCard 
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}