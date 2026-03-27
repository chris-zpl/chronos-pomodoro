import type { ToastContentProps } from "react-toastify";
import styles from "./styles.module.css";

type CustomNotificationProps = ToastContentProps<{
  title: string;
  content: string;
  onClosing: (confirmation: boolean) => void;
}>;

export function WithActions({ closeToast, data }: CustomNotificationProps) {
  return (
    <div className={styles.container}>
      <h3>{data.title}</h3>
      <p>{data.content}</p>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            data.onClosing(true);
            closeToast();
          }}
        >
          Confirmar
        </button>
        <button
          onClick={() => {
            data.onClosing(false);
            closeToast();
          }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
