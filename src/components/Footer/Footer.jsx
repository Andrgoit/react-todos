import github from "@/assets/github.svg";
import styles from "@/components/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/Andrgoit/react-todo-list" target="_blank">
        <img src={github} alt="github icon" className={styles.footerIcon} />
      </a>
    </footer>
  );
}
