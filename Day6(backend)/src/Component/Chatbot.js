
import React, { useState, useEffect } from 'react';
import './Chatbot.css'; 

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [userMessages, setUserMessages] = useState([]);
  const [botMessages, setBotMessages] = useState([]);
  const [faqVisible, setFaqVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
   
    sendBotMessage('Hello! I am the chatbot.');
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    
    setUserMessages([...userMessages, input]);

    
    setInput('');

    
    if (input.toLowerCase() === 'hi') {
      sendBotMessage('Hi, how can I help you?');
    } else if (input.toLowerCase() === 'i love you') {
      sendBotMessage('I love you too!');
      setBackgroundColor('#ff99cc'); 
      showFallingHearts(); 
    } else {
      
      simulateGenericBotResponse(input);
    }
  };

  const simulateGenericBotResponse = (userInput) => {
    
    setTimeout(() => {
      
      sendBotMessage(`You said: "${userInput}"`);
    }, 500);
  };

  const sendBotMessage = (message) => {
    
    setBotMessages([...botMessages, message]);
  };

  const toggleFAQ = () => {
    setFaqVisible(!faqVisible);
  };

  const showFallingHearts = () => {
    
    setShowHearts(true);

    
    setTimeout(() => {
      setShowHearts(false);
    }, 5000); 
  };

  return (
    <div className="chatbot" style={{ backgroundColor: backgroundColor }}>
      <h1>Chatbot</h1>
      <div className="chat-container">
        <div className="messages">
          {userMessages.map((message, index) => (
            <div key={`user-${index}`} className="message user">
              {message}
            </div>
          ))}
          {botMessages.map((message, index) => (
            <div key={`bot-${index}`} className="message bot">
              {message}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <button onClick={toggleFAQ}>FAQ</button>
      {faqVisible && (
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>What is the chatbot's purpose?</li>
            <li>How can I reset the chat?</li>
            <li>Can I ask for help with specific topics?</li>
            {/* Add more FAQ items as needed */}
          </ul>
        </div>
      )}
      {showHearts && <FallingHearts />}
    </div>
  );
};

const FallingHearts = () => {
  const hearts = Array.from({ length: 10 }).map((_, index) => (
    <div key={index} className="heart" style={generateHeartStyle()}></div>
  ));

  return (
    <div className="heart-container">
      {hearts}
    </div>
  );
};

const generateHeartStyle = () => {
  const style = {
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 2 + 2}s`,
  };
  return style;
};

export default Chatbot;
