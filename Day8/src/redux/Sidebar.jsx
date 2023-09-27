import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSidebar } from './sidebarActions';

import './Sidebar.css';

const Sidebar = ({ username, profileImage }) => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    setSelectedImage(null);
    dispatch(closeSidebar());
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <div className="circle">
          {selectedImage ? (
            <img src={selectedImage} alt="Profile" className="profile-image" />
          ) : (
            <>
              <label htmlFor="image-upload" className="upload-label">
                <i className="fas fa-plus"></i> Upload a profile picture
              </label>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
            </>
          )}
        </div>
        <p className="name">{username}</p>

        <div className="sidebar-text">
          <p><a href="./user">Profile</a></p>
          <p>Search</p>
          <p>Explore</p>
          <p>Messages</p>
          <p>Notifications</p>
          <p>Create</p>
        </div>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {/* No overlay div */}
    </div>
  );
};

export default Sidebar;
