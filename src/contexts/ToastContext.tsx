import ToastList from "components/ui/toast/toast-list";
import { createContext, ReactNode, useContext, useState } from "react";

export enum Position {
  "top-right" = "top-right",
  "top-left" = "top-left",
  "bottom-right" = "bottom-right",
  "bottom-left" = "bottom-left"
}

type ToastMessage = {
  id: number;
  message: string;
  type: string; // e.g., "success", "error"
};

type ToastContextProps = {
  children: ReactNode;
}

type ToastContextType = {
  toasts: ToastMessage[];
  showToast: (message: string, type: string) => void;
  removeAllToasts: () => void;
  removeToast: (id: number) => void;
  position: Position;
  setPosition: (position: Position) => void;
};

const initialValue = {
  toasts: [],
  showToast: () => {},
  removeAllToasts: () => {},
  removeToast: () => {},
  position: Position["bottom-right"],
  setPosition: () => {},
}

const ToastContext = createContext<ToastContextType>(initialValue);

export const ToastProvider = ({ children }: ToastContextProps) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [position, setPosition] = useState<Position>(initialValue.position);

  const showToast = (message: string, type: string) => {
    const toast = { id: Date.now(), message, type };
    setToasts((prevToasts) => [...prevToasts, toast]);
    console.log("🚀 ~ showToast ~ message:", message)

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id));
    }, 3000);
  };

  const removeAllToasts = () => setToasts([]);

  const removeToast= (id) => setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeAllToasts, position, setPosition, removeToast }}>
      {children}
      <ToastList  />
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};