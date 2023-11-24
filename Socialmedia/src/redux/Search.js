// SearchPage.js

import React, { useState } from 'react';
import './Search.css';

const usersData = [
  { id: 1, name: 'John Doe', image: 'https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 2, name: 'Jane Smith', image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 3, name: 'Alice Johnson', image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 4, name: 'Bob Anderson', image: 'https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600' },
  // Add more user data as needed
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    setIsLoading(true);

    // Simulate an asynchronous API call (e.g., fetch from a server)
    setTimeout(() => {
      const filteredResults = usersData.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
      setIsLoading(false);
    }, 500); // Simulated delay of 500 milliseconds
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleResultClick = (userId) => {
    // Add functionality to view more details, e.g., redirect to user profile page
    console.log(`Clicked on user with ID ${userId}`);
  };

  return (
    <div className="search-page-container">
      <header>
      <h1 style={{ color: 'black' }}>Search Page</h1>
      </header>

      <section className="search-bar-section">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm && (
          <button className="clear-search-btn" onClick={handleClearSearch}>
            Clear
          </button>
        )}
      </section>

      <section className="search-results-section">
        {isLoading ? (
          <p>Loading...</p>
        ) : searchResults.length > 0 ? (
          <ul>
            {searchResults.map((user) => (
              <li key={user.id} onClick={() => handleResultClick(user.id)}>
                <img src={user.image} alt={user.name} className="user-icon" />
                <span className="user-name">{user.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </section>
    </div>
  );
};

export default SearchPage;
