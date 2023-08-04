
import { v4 as uuid } from "uuid";
import { HowItWorksCard } from "./HowItWorksCard";


import styles from "./index.module.css"
import { AddBusiness, BarChart, CurrencyExchange, Handshake, InsertEmoticon, TrendingUp } from "@mui/icons-material";

const page = {
  title: "How It Works",
  list: [
    {
      id: uuid(),
      title: "Boost Sales and Customer Satisfaction!",
      description: "Uncover untapped potential and elevate your business with our Service Audit program—discover valuable insights to enhance sales and customer satisfaction.",
      icon: () => <CurrencyExchange
        fontSize="inherit"
        className={styles.icon}
      />
    },
    {
      id: uuid(),
      title: "Revolutionize Your Business Experience!",
      description: "Transform your local business with our Service Audit—unravel customer preferences, improve service quality, and elevate your overall reputation.",
      icon: () => <Handshake
        fontSize="inherit"
        className={styles.icon}
      />

    },
    {
      id: uuid(),
      title: "Data-Driven Success Strategy!",
      description: "Empower your business with data-driven strategies, as our Service Audit analyzes customer feedback to deliver actionable improvements and boost your revenue.",
      icon: () => <TrendingUp
        fontSize="inherit"
        className={styles.icon}
      />

    }
  ]
}

export const HowItWorksPage = () => {
  return (
  <section
    className={styles.section}
  >
    <h1>{page.title}</h1>
    {page.list.map(item => {
      return (
        <HowItWorksCard 
          key={item.id}
          item={item}
        />
      )
    })}
  </section>
  );
}