import { toast } from "react-toastify";
import { WithActions } from "../components/CustomNotification";

export const showMessage = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  warning: (msg: string) => toast.warning(msg),
  warn: (msg: string) => toast.warn(msg),
  info: (msg: string) => toast.info(msg),
  action: (
    title: string,
    content: string,
    onClosing: (confirmation: boolean) => void,
  ) =>
    toast(WithActions, {
      data: {
        title: title,
        content: content,
        onClosing
      },
      autoClose: false,
      closeButton: false,
    }),
  dismiss: () => toast.dismiss(),
};
