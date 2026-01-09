import logo from "@/assets/icons/logo.png";

import styles from "@/components/Logo/Logo.module.css";
export default function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo} alt="logo" width="100%" height="100%" />
    </div>
  );
}
