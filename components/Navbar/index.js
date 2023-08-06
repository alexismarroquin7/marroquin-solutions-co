"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export const NavBar = () => {
  
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if(typeof window !== "undefined") {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
  <div
    className={styles.wrapper}
  >
    <nav
      className={`glass ${styles.nav} ${visible ? "" : styles.nav_hidden}`}
    >
      <h3
        className={styles.logo}
      >Marroquin Solutions</h3>
    </nav>
  </div>
  );
}