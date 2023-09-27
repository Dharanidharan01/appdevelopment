import React, { useState } from 'react';
import videoSrc from './Assets/bg3.mp4';
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
      <video autoPlay loop muted className="bg-video">
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
