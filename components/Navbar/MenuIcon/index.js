
import styles from "./index.module.css";

export const MenuIcon = ({ width = "2rem", onClick, open }) => {

  return (
  <svg
    viewBox="0 0 100 100"
    width={width}
    height={width}
    role="button"
    onClick={onClick}
  >
    <path 
      className={`${styles.path} ${styles.path_a} ${open ? styles.open : ""}`}
    />
    <path 
      className={`${styles.path} ${styles.path_b} ${open ? styles.open : ""}`}
    />
    <path 
      className={`${styles.path} ${styles.path_c} ${open ? styles.open : ""}`}
    />
  </svg>
  );
}