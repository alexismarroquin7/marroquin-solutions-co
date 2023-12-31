import { CheckCircle } from "@mui/icons-material";
import styles from "./ServiceCard.module.css";

export const ServiceCard = ({service}) => {
  return (
  <div
    className={`glass ${styles.container}`}
  >
    <p
      className={`${styles.subTitle}`}
    >{service.subTitle}</p>
        
    <h3
      className={service.subTitle === "PREMIUM" ? `highlight` : ""}
    >{service.title}</h3>
    <p
      className={styles.description}
    >
      {service.description}
    </p>

    <p
      className={styles.price}
    >${service.price}
      <span
        className={styles.price_subtext}
      >
        {' / month'}
      </span>
    </p>

    <ul
        className={styles.features_list}
      >
        {service.features.map(ft => {
          return (
            <li
              key={ft.id}
              className={styles.features_list_item}
            >
              <CheckCircle
                fontSize="inherit"
                className={styles.features_list_item_icon}
              />

              <span
                className={styles.features_list_item_name}
              >
                {ft.name}
              </span>
            </li>
          )
        })}
    </ul>
      
    <button
      className={styles.button}
    >Get Started</button>
  </div>
  );
}