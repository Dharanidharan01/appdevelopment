import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const HomeLink = () => {

  const homeLinkUrl = '/home'; // Replace with the actual URL for your home page

  return (
    <div className="sidebar-item">
      {/* Use the Link component to create the navigation link */}
      <Link to={homeLinkUrl} className="sidebar-link">
        <p>Home</p>
      </Link>
    </div>
  );
};

export default HomeLink;
