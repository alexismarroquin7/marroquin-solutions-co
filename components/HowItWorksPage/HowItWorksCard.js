import styles from "./HowItWorksCard.module.css";

export const HowItWorksCard = ({item}) => {
  return (
  <div
    className={styles.card}
  >

    {item.icon()}

    <div
      className={styles.container}
    >
      <h3
        className={styles.title}
      >
        {item.title}
      </h3>

      <p>
        {item.description}
      </p>
    </div>

  </div>
  )
}