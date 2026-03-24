import styles from "./styles.module.css";
import { TimerIcon } from "lucide-react";
import { RouterLink } from "../RouterLink";

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink href="/" className={styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
}
