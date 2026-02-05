import { useNotifications } from "../context/NotificationContext";

export default function Notifications() {
  const { notifications, markAsRead, clearAll } = useNotifications();

  return (
    <>
      <button onClick={clearAll}>Clear All</button>
      {notifications.map(n => (
        <div key={n.id} className="p-3 border-b">
          <p>{n.message}</p>
          {!n.read && (
            <button onClick={() => markAsRead(n.id)}>Mark as read</button>
          )}
        </div>
      ))}
    </>
  );
}
