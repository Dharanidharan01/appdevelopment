import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar, closeSidebar } from './redux/sidebarActions';
import './Home2.css';
import Sidebar from './redux/Sidebar';
import ChatBox from './ChatBox'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';

const Home2F = ({ username }) => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [trendingTopics, setTrendingTopics] = useState([]);

  useEffect(() => {
    // Example data - replace with your API call or pre-defined data
    const trendingData = [
      { topic: '#newsbytes', image: 'https://images.pexels.com/photos/13871571/pexels-photo-13871571.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { topic: '#sports', image: 'https://images.pexels.com/photos/12628402/pexels-photo-12628402.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { topic: '#cinemini', image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { topic: '#shopping', image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600' },
      // Add more topics as needed
    ];

    setTrendingTopics(trendingData);
  }, []);

  const handleToggleSidebar = () => {
    if (isOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handlePostSubmit = () => {
    if (postText.trim() !== '' || selectedImage) {
      const newPost = {
        text: postText,
        timestamp: new Date().toLocaleString(),
        image: selectedImage,
      };

      setPosts([newPost, ...posts]);
      setPostText('');
      setSelectedImage(null);
    }
  };

  const handleTopicClick = (topic) => {
    if (topic === '#newsbytes') {
      navigate('/news');
    } else if (topic === '#sports') {
      navigate('/sports');
    } else if (topic === '#cinemini') {
      navigate('/cine');
    } else if (topic === '#shopping') {
      navigate('/shopping');
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="home2-page">
      <div className="top-bar">
        <button onClick={handleToggleSidebar} className={`toggle-button ${isOpen ? 'open' : ''}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <h1 style={{ color: 'white' }}>
      <a href="home" style={{ color: 'white', textDecoration: 'none' }}>
        Welcome, {username}!
      </a>
    </h1>
       
      </div>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {trendingTopics.map((topic, index) => (
            <div key={index} onClick={() => handleTopicClick(topic.topic)}>
              <img src={topic.image} 
              alt={topic.topic} 
              className="slider-image" 
              />
              <p className="slider-topic">{topic.topic}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className={`home2-container ${isOpen ? 'sidebar-open' : ''}`}>
        {isOpen && <Sidebar username={username} />}
      </div>

      {showChat && <ChatBox />}

      
    </div>
  );
};

export default Home2F;