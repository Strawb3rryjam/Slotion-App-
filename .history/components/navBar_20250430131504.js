import styles from "@/components/navBar.module.css";

import Image from "next/image";

import Hanger from "@/assets/Hanger.svg";
import Home from "@/assets/Home.svg";
import Profile from "@/assets/Profile.svg";
import Search from "@/assets/Search.svg";
import Tips from "@/assets/Tips.svg";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <img src={Home} alt="Home" className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <img src={Search} alt="Search" className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <img src={Hanger} alt="Closet" className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <img src={Tips} alt="Tips" className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <img src={Profile} alt="Profile" className={styles.icon} />
        </li>
      </ul>
    </nav>
  );
}
