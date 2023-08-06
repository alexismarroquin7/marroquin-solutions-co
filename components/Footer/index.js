import { v4 as uuid } from "uuid";

import styles from "./index.module.css";
import Link from "next/link";

const links = [
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

export const Footer = () => {
  return (
  <footer
    className={styles.footer}
  >
    <div
      className={styles.footer_links}
    >
      {links.map(link => {
        return (
          <Link
            className={styles.footer_link}
            key={link.id}
            href={link.href}
          >
            <p>
              {link.name}
            </p>
          </Link>
        )
      })} 
    </div>
    <div
      className={styles.footer_logo}
    >
      <Link
        href={"/"}
        className={styles.footer_link_logo}
      >
        <p>Marroquin Solutions</p>
      </Link>
    </div>
  </footer>
  )
}