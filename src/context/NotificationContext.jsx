import { createContext, useContext, useEffect, useState } from "react";
import notificationsData from "../data/notifications.json";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("notifications");
    if (stored) {
      setNotifications(JSON.parse(stored));
    } else {
      localStorage.setItem(
        "notifications",
        JSON.stringify(notificationsData)
      );
      setNotifications(notificationsData);
    }
  }, []);

  const updateNotifications = (data) => {
    setNotifications(data);
    localStorage.setItem("notifications", JSON.stringify(data));
  };

  const markAsRead = (id) => {
    updateNotifications(
      notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  const clearAll = () => {
    updateNotifications([]);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <NotificationContext.Provider
      value={{ notifications, markAsRead, clearAll, unreadCount }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);
