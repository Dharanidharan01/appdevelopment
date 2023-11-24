import React, { useState, useEffect } from 'react';
import './Chat.css';

const friendsData = [
  { id: 1, name: 'Friend 1' },
  { id: 2, name: 'Friend 2' },
  { id: 3, name: 'Friend 3' },
  { id: 4, name: 'Friend 4' },
  { id: 5, name: 'Friend 5' },
];

function ChatApp() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  // Function to handle sending a message
  const sendMessage = () => {
    if (message.trim() === '') return;
    const newMessage = {
      text: message,
      sender: 'You',
    };
    setChat([...chat, newMessage]);
    setMessage('');
  };

  // Simulate receiving a message
  useEffect(() => {
    if (selectedFriend) {
      setTimeout(() => {
        const receivedMessage = {
          text: 'Hello! This is a received message.',
          sender: selectedFriend.name,
        };
        setChat([...chat, receivedMessage]);
      }, 2000);
    }
  }, [selectedFriend]);

  return (
    <div className="chat-app">
      <div className="friends-list">
        <h2>Friends</h2>
        <ul>
          {friendsData.map((friend) => (
            <li
              key={friend.id}
              className={selectedFriend === friend ? 'active' : ''}
              onClick={() => setSelectedFriend(friend)}
            >
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-box">
        <h2>{selectedFriend ? `Chat with ${selectedFriend.name}` : 'Select a Friend'}</h2>
        <div className="chat">
          {chat.map((message, index) => (
            <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
              <span className="sender">{message.sender}:</span>
              {message.text}
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
