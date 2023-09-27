import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy;  <a href='./home'>2023 Friendify - Social media app, coimbatore. </a></p>
        <ul>
          <li><a href="./aboutus">About Us</a></li>
          <li><a href="contactus">Contacts</a></li>
          <li><a href="chatbot">Chatbot</a></li>
          <li><a href="rightsreserved">All Rights Reserved.      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Cookies Policy | Privacy Policy </a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
