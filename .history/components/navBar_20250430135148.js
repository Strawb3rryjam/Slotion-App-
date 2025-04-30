import styles from "@/components/navBar.module.css";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="./page/index.js">
            <Image
              src={Home}
              alt="Home"
              width={24}
              height={24}
              className={styles.icon}
            />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/search">
            <Image
              src={Search}
              alt="Search"
              width={24}
              height={24}
              className={styles.icon}
            />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/closet">
            <Image
              src={Hanger}
              alt="Closet"
              width={24}
              height={24}
              className={styles.icon}
            />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/tips">
            <Image
              src={Tips}
              alt="Tips"
              width={24}
              height={24}
              className={styles.icon}
            />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/profile">
            <Image
              src={Profile}
              alt="Profile"
              width={24}
              height={24}
              className={styles.icon}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
