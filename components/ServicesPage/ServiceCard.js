import { Add, Check } from "@mui/icons-material";
import styles from "./ServiceCard.module.css";

export const ServiceCard = ({service}) => {
  return (
  <div
    className={styles.container}
  >
    <div
      className={styles.image}
    ></div>

    <div
      className={styles.card}
    >
      <h2
        className={styles.card_top}
      >
        {service.title}
        <span
          className={styles.price}
        >${service.price}{'/m'}</span>
      </h2>
      <p
        className={styles.frequency}
      >
        {service.frequency}
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
              {ft.name.includes('everything') ? (
                <Check
                  fontSize="inherit"
                  className={styles.features_list_item_icon}
                /> 
              ):(
                <Add
                  fontSize="inherit"
                  className={styles.features_list_item_icon}
                />
              )}

              <span
                className={styles.features_list_item_name}
              >
                {ft.name}
              </span>
            </li>
          )
        })}
      </ul>
      
      

      <button>Book wash</button>
    </div>
  </div>
  );
}