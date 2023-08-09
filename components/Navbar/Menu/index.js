import { v4 as uuid } from "uuid";

import Link from "next/link";

import styles from "./index.module.css";
import { KeyboardArrowRight } from "@mui/icons-material";

const links = [
  {
    id: uuid(),
    name: "Home",
    href: "/"
  },
  {
    id: uuid(),
    name: "Services",
    href: "#services"
  },
  {
    id: uuid(),
    name: "How It Works",
    href: "#how-it-works"
  },
  {
    id: uuid(),
    name: "Contact Us",
    href: "#contact"
  },
  {
    id: uuid(),
    name: "FAQ",
    href: "#faq"
  }
]

export const Menu = ({ open = false, onClose }) => {
  return (
    <section
      className={`${styles.menu} ${open ? "" : styles.menu_hidden}`}
    >
      <div
        className={`${styles.menu_container}`}
      >
        {links.map(l => {
          return (
            <button
              className={`${styles.menu_link}`}
              href={l.href}
              key={l.id}
              onClick={() => onClose(l.href)}
            >
              {l.name}
              <KeyboardArrowRight
                fontSize="inherit"
                className={styles.icon}
              />
            </button>
          )
        })}
      </div>
    </section>
  )
}