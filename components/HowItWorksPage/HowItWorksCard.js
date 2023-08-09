
import styles from "./HowItWorksCard.module.css";

export const HowItWorksCard = ({item}) => {
  const { Icon } = item;

  return (
  <div
    className={`glass ${styles.card}`}
  >

    <Icon
      fontSize="inherit"
      className={styles.icon}
    />

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