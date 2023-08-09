
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
      Icon: (props) => <CurrencyExchange {...props}/>
    },
    {
      id: uuid(),
      title: "Revolutionize Your Business Experience!",
      description: "Transform your local business with our Service Audit—unravel customer preferences, improve service quality, and elevate your overall reputation.",
      Icon: (props) => <Handshake {...props}/>
    },
    {
      id: uuid(),
      title: "Data-Driven Success Strategy!",
      description: "Empower your business with data-driven strategies, as our Service Audit analyzes customer feedback to deliver actionable improvements and boost your revenue.",
      Icon: (props) => <TrendingUp {...props}/>
    }
  ]
}

export const HowItWorksPage = () => {
  return (
  <section
    className={styles.section}
    id="how-it-works"
  >
    <h2>{page.title}</h2>
    <div
      className={styles.card_list}
    >
      {page.list.map((item, i) => {
        return (
          <HowItWorksCard 
            key={item.id}
            item={item}
          />
        )
      })}
    </div>
  </section>
  );
}