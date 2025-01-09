import { useEffect, useRef } from "react";
import ToastContent from "./toast-content";
import { Position, useToast } from "contexts/ToastContext";
import "./toast-list.css"


const ToastList = () => {
  const { position, toasts: data, removeToast } = useToast();
  
  const listRef = useRef(null);

  const handleScrolling = (el) => {
    const isTopPosition = [Position["top-left"], Position["top-right"]].includes(position);

    if (isTopPosition) {
      el?.scrollTo(0, el.scrollHeight);
    } else {
      el?.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    handleScrolling(listRef.current);
  }, [position, data]);

  const sortedData = position === Position["bottom-right"] || position === Position["bottom-left"]
    ? [...data].reverse()
    : [...data];

  return (
    sortedData.length > 0 && (
      <div
        className={`toast-list toast-list--${position}`}
        aria-live="assertive"
        ref={listRef}
      >
        {sortedData.map((toast) => (
          <ToastContent
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    )
  );
};

export default ToastList;