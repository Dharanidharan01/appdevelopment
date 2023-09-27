import React from 'react';
import './ChatSidebar.css'; 
const ChatSidebar = ({ showChat, toggleChat }) => {
  // Chat sidebar content and functionality go here

  return (
    <div className={`chat-sidebar ${showChat ? 'show' : ''}`}>
      {/* Chat sidebar content */}
      <h3>Chat with Friends</h3>
      {/* Add your list of friends and chat interface components here */}
      <button className="close-button" onClick={toggleChat}>
        Close
      </button>
    </div>
  );
};

export default ChatSidebar;
