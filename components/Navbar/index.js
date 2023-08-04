import styles from "./index.module.css";

export const NavBar = () => {
  return (
  <div
    className={styles.wrapper}
  >
    <nav
      className={styles.nav}
    >
      <h3>MobileWash Whiz</h3>
      
    </nav>
  </div>
  );
}