import React, { useState } from 'react';
import './NotificationPage.css';
const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'You have a new message', timestamp: '2 minutes ago' },
    { id: 2, message: 'Friend request received', timestamp: '1 hour ago' },
    // Add more notifications as needed
  ]);

  return (
    <div className='aaa'>
      <h1>Notifications</h1>
      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map((notification) => (
            <li className='ai'key={notification.id}>
              <strong>{notification.message}</strong>
              <p>{notification.timestamp}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPage;