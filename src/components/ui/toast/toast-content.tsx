import {
  SuccessIcon,
  FailureIcon,
  WarningIcon,
  CloseIcon,
} from "../Icons/icons";
import "./toast-content.css"

type ToastProps = {
  message: string,
  type: string,
  onClose: () => void,
}

const ToastContent = ({ message, type, onClose }: ToastProps) => {
  const iconMap = {
    success: <SuccessIcon />,
    failure: <FailureIcon />,
    warning: <WarningIcon />
  };

  const toastIcon = iconMap[type as keyof typeof iconMap] || null;

  return (
    <div className={`toast toast--${type}`} role="alert">
      <div className="toast-message">
        {toastIcon && (
          <div className="icon icon--lg icon--thumb">{toastIcon}</div>
        )}
        <p>{ message }</p>
      </div>
      <button className="toast-close-btn" onClick={onClose}>
        <div className="icon">
          <CloseIcon></CloseIcon>
        </div>
      </button>
    </div>
  )
}

export default ToastContent;