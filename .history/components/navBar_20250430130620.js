import styles from "@/components/navBar.module.css";

import Hanger from "@/assets/hanger.svg"; // Tips
import Profile from "@/assets/profile.svg"; // Profile
import Search from "@/assets/search.svg"; // Search
import Closet from "@/assets/closet.svg"; // Closet

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <img src={Search} alt="Search" className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <img src={Closet} alt="Closet" className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <img src={Hanger} alt="Tips" className={styles.icon} />
        </li>
        <li className={styles.navItem}>
          <img src={Profile} alt="Profile" className={styles.icon} />
        </li>
      </ul>
    </nav>
  );
}
