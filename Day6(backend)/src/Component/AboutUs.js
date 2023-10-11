import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import { Link } from 'react-scroll';
import bgVideo from '../Assets/bg3.mp4';

const AboutUs = () => {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const [moreContentVisible, setMoreContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      const leftAnimationElement = document.querySelector('.left-animation');
      const rightAnimationElement = document.querySelector('.right-animation');
      const moreContentElement = document.querySelector('.more-content');

      if (leftAnimationElement && leftAnimationElement.offsetTop < scrollPosition) {
        setLeftVisible(true);
      }

      if (rightAnimationElement && rightAnimationElement.offsetTop < scrollPosition) {
        setRightVisible(true);
      }

      if (moreContentElement && moreContentElement.offsetTop < scrollPosition) {
        setMoreContentVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-us">
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content-container">
        <h1>About Our Social Media App</h1>
        <p className='op'>
          {/* Your app description */}
          "Welcome to Friendify, your go-to social networking app for building and nurturing meaningful friendships! 🎉"
        </p>
        <div className="scroll-content">
          <Link to="left-animation" smooth={true} duration={1000}>
            {/* Scroll Left */}
          </Link>
          <Link to="right-animation" smooth={true} duration={1000}>
            {/* Scroll Right */}
          </Link>
        </div>
      </div>
      <div className={`left-animation ${leftVisible ? 'visible' : ''}`} id="left-animation">
        <h2>App Features:</h2>
        <p className='op'>
          {/* App features */}
          "Welcome to Friendify, your go-to social networking app for building and nurturing meaningful friendships! 🎉"
        </p>
      </div>
      <div className={`right-animation ${rightVisible ? 'visible' : ''}`} id="right-animation">
        <h2>App Updates:</h2>
        <p className='op'>
          {/* App updates */}
          "Discover amazing features on Friendify: ✔️ Chat with friends ✔️ Share photos and videos ✔️ Create and join groups ✔️ Stay updated with friends' status ✔️ Plan events and gatherings ✔️ Connect with new friends nearby. Try them all today!"
        </p>
      </div>
      <div className={`more-content ${moreContentVisible ? 'visible' : ''}`}>
        <h2>More about Friendify</h2>
        <p className='op'>
          {/* More about Friendify */}
          "Welcome to Friendify, your go-to social networking app for building and nurturing meaningful friendships! 🎉 With Friendify, connecting with friends has never been more delightful. From instant chat conversations to sharing your life's highlights through photos and videos"
        </p>
        {/* Social media handles with small logos */}
        <div className="social-media-container">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1Yc6wAyFwIooidPHOf7VnVbQbIxDlFWllw&usqp=CAU" alt="Facebook" className="social-media-logo" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="data:image/png;base64,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" alt="Twitter" className="social-media-logo" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="data:image/jpeg;base64,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" alt="Instagram" className="social-media-logo" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSX6-iisLiU3Rebh1dV79bOalUGJvdEjRPGg&usqp=CAU" alt="LinkedIn" className="social-media-logo" />
          </a>
          {/* Add more social media handles here */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
