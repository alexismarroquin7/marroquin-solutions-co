
import { v4 as uuid } from "uuid";
import { HowItWorksCard } from "./HowItWorksCard";
import { CurrencyExchange, Handshake, TrendingUp } from "@mui/icons-material";

import styles from "./index.module.css"

const page = {
  title: "How It Works",
  list: [
    {
      id: uuid(),
      title: "Boost Sales and Customer Satisfaction!",
      description: "By analyzing customer feedback, we help you uncover untapped potential and tailor improvements that will delight your customers, boost sales, and lead your business to success.",
      
      Icon: () => <CurrencyExchange
        fontSize="inherit"
        className={styles.icon}
      />
    },
    {
      id: uuid(),
      title: "Revolutionize Your Business Experience!",
      description: "Transform your local business with our Service Audit—unravel customer preferences, improve service quality, and elevate your overall reputation.",
      Icon: () => <Handshake
        fontSize="inherit"
        className={styles.icon}
      />

    },
    {
      id: uuid(),
      title: "Data-Driven Success Strategy!",
      description: "Empower your business with data-driven strategies, as our Service Audit analyzes customer feedback to deliver actionable improvements and boost your revenue.",
      Icon: () => <TrendingUp
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
    <h2>{page.title}</h2>
    <div
      className={styles.card_list}
    >
      {page.list.map((item, i) => {
        const { Icon } = item;
        return (
          <HowItWorksCard 
            key={item.id}
            item={item}
            icon={<Icon/>}
          />
        )
      })}
    </div>
  </section>
  );
}