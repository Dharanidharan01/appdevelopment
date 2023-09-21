import React, { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message = {
        text: newMessage,
        timestamp: new Date().toLocaleString(),
      };

      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h3>Chat with Friends</h3>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <p className="message-text">{message.text}</p>
            <p className="message-timestamp">{message.timestamp}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
