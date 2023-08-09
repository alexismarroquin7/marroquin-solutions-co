"use client";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { MenuIcon } from "./MenuIcon";
import { Menu } from "./Menu";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const router = useRouter();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  
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

  useEffect(() => {
    if(typeof window !== "undefined") {
      document.querySelector('body').style.overflow = open 
      ? "hidden" 
      : "auto";
      document.querySelector('body').style.position = open 
      ? "fixed" 
      : "";

    }
  }, [open]);

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

      <MenuIcon
        open={open}
        onClick={toggleOpen}
      />
    </nav>
    <Menu
      open={open}
      onClose={(href) => {
        toggleOpen();
        router.push(href);
      }}
    />
  </div>
  );
}