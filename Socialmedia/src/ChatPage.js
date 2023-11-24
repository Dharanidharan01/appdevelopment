import React, { useState } from 'react';
import './Chat.css';
const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'User', text: 'Hello!', timestamp: '2 minutes ago' },
    { id: 2, sender: 'Friend', text: 'Hi there!', timestamp: '1 minute ago' },
    // Add more messages as needed
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const newMessageObj = {
      id: messages.length + 1,
      sender: 'User', // You can modify this to dynamically set the sender
      text: newMessage,
      timestamp: 'Just now',
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

  return (
    <div>
      <h1>Chat</h1>
      <div className="chat-container">
        <div className="message-list">
          {messages.length === 0 ? (
            <p>No messages</p>
          ) : (
            <ul>
              {messages.map((message) => (
                <li key={message.id}>
                  <strong>{message.sender}</strong>
                  <p>{message.text}</p>
                  <p className="timestamp">{message.timestamp}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="message-input">
          <textarea
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          ></textarea>
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;