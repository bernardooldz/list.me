import { Toast } from "radix-ui";
import "./styles.css";
import { useEffect, useRef } from "react";

const ToastInfos = ({ open, setOpen, title, description, status }) => {
  const timerRef = useRef(0);

  useEffect(() => {
    if (open) {
      timerRef.current = setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timerRef.current);
  }, [open, setOpen]);

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className={`ToastRoot ToastRoot${status}`} open={open} onOpenChange={setOpen}>
        <Toast.Title className="ToastTitle">{title}</Toast.Title>
        <Toast.Description className="ToastDescription">{description}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default ToastInfos;
