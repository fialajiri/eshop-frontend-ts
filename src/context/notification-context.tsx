import { produceWithPatches } from "immer";
import React, { createContext, useState, useEffect } from "react";

export interface Notification {
  title: string;
  message: string;
  status: "success" | "error" | "pending";
}

export interface NotificationContextInterface {
  notification: Notification | null;
  showNotification: (notificationData: Notification) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextInterface>({
  notification: null,
  showNotification: (notificationData: Notification) => {},
  hideNotification: () => {},
});

export const NotificationContextProvider: React.FC = (props) => {
  const [activeNotification, setActiveNotification] =
    useState<Notification | null>(null);

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData: Notification) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
