"use client";
import { v4 as uuid } from "uuid";
import styles from "./index.module.css";
import { ServiceCard } from "./ServiceCard";

const page = {
  title: 'Services',
  description: `Here's what we offer.`,
  services: [
    {
      /*
        Comprehensive survey and data collection from your customers over a 1-month period.
        Detailed report highlighting the most significant findings and recommendations for improvements.
      */
      id: uuid(),
      title: `Growth Insights`,
      subTitle: `BASIC`,
      description: "Discover customer reviews and suggestions with a detailed report highlighting the most significant findings.",
      price: 500,
      features: [
        {
          id: uuid(),
          name: "Comprehensive survey"
        },
        {
          id: uuid(),
          name: "Data collection"
        },
        {
          id: uuid(),
          name: "Detailed report"
        },
      ]
    },
    {
      /*
        Everything included in the Basic Package.
        In-depth analysis of the data to identify key trends and actionable insights.
        Personalized consultation with our experts to discuss the findings and strategies for improvement.
      */
      id: uuid(),
      title: `Experience Accelerator`,
      subTitle: `STANDARD`,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" ,
      price: 750,
      features: [
        {
          id: uuid(),
          name: "Comprehensive survey"
        },
        {
          id: uuid(),
          name: "Data collection"
        },
        {
          id: uuid(),
          name: "Detailed report"
        },
        {
          id: uuid(),
          name: "In-Depth analysis"
        },
        {
          id: uuid(),
          name: "Personalized consultation"
        }
      ]
    },
    {
      id: uuid(),
      title: `Data-Driven Success`,
      subTitle: `PREMIUM`,
      // description: `
      //   Everything included in the Standard Package.
      //   Additional data visualization and graphical representations to make the insights more accessible.
      //   Customized customer feedback analysis to understand individual preferences and pain points.
        // Ongoing support and follow-up after the implementation of recommended improvements.
      // `,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      price: 1000,
      features: [
        {
          id: uuid(),
          name: "Comprehensive survey"
        },
        {
          id: uuid(),
          name: "Data collection"
        },
        {
          id: uuid(),
          name: "Detailed Report"
        },
        {
          id: uuid(),
          name: "In-Depth Analysis"
        },
        {
          id: uuid(),
          name: "Personalized consultation"
        },
        {
          id: uuid(),
          name: "Custom Data Visualization"
        },
        {
          id: uuid(),
          name: "Ongoing support"
        },
      ]
    }
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
          className={styles.service_card_list}
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