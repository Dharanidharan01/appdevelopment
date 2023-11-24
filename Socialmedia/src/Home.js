import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar, closeSidebar } from './redux/sidebarActions';
import './Home.css';
import Sidebar from './redux/Sidebar';
import ChatBox from './ChatBox';
import Feed from './Feed'; // Import the Feed component

const Home = ({ username }) => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const [showChat, setShowChat] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <div className="home-page">
      <div className="top-bar">
        <button onClick={handleToggleSidebar} className={`toggle-button ${isOpen ? 'open' : ''}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <h1>Welcome, {username}</h1>
      </div>

      <div className={`home-contaier ${isOpen ? 'sidebar-open' : ''}`}>
        {isOpen && <Sidebar username={username} />}
        <div className="contnt">
          <div className="post-elon">
            <div className="post-pt">
              <textare
                placeholder="What's on your mind?"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                className="post-textarea"
              />
              <inpu
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="image-upload"
              />
              <button onClick={handlePostSubmit} className="post-button">
                
              </button>
            </div>
          </div>

          <div className="ost-list">
            {posts.map((post, index) => (
              <div className="post" key={index}>
                <p className="post-text">{post.text}</p>
                {post.image && (
                  <img
                    src={URL.createObjectURL(post.image)}
                    alt="Posted Image"
                    className="posimage"
                  />
                )}
                <p className="timestamp">{post.timestamp}</p>
              </div>
            ))}
          </div>
        </div>

        {showChat && <ChatBox />}
        
        {/* Include the Feed component here */}
        <Feed />
      </div>
    </div>
  );
};

export default Home;
