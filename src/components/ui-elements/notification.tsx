import { useContext } from "react";

import NotificationContext from "../../context/notification-context";
import { Notification } from "../../context/notification-context";

const Notification: React.FC<Notification> = ({ title, message, status }) => {
  const notificationCtx = useContext(NotificationContext);

  let statusClasses = "";

  if (status === "success") {
    statusClasses = "success";
  }

  if (status === "error") {
    statusClasses = "error";
  }

  if (status === "pending") {
    statusClasses = "pending";
  }

  const activeClasses = `${"notification"} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );

};
export default Notification;
