
import styles from "./HowItWorksCard.module.css";

export const HowItWorksCard = ({item, icon}) => {
  return (
  <div
    className={`glass ${styles.card}`}
  >

    <span>
      {icon}
    </span>

    <div
      className={styles.container}
    >
      <h3
        className={styles.title}
      >
        {item.title}
      </h3>

      <p
        className={styles.description}
      >
        {item.description}
      </p>
    </div>

  </div>
  )
}