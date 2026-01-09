import { Logo } from "@/components";
import styles from "@/components/Header/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <Logo />
      </div>
    </header>
  );
}
