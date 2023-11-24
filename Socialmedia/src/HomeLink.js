import React from 'react';
import { Link } from 'react-router-dom'; 

const HomeLink = () => {

  const homeLinkUrl = '/home'; 

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
