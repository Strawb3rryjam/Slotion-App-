import styles from "@/components/navBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>Search</li>
        <li className={styles.navItem}>Closet</li>
        <li className={styles.navItem}>Tips</li>
        <li className={styles.navItem}>Profile</li>
      </ul>
    </nav>
  );
}
