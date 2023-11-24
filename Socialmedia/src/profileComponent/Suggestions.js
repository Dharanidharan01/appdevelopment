import React from 'react';
import './Suggestions.css';

const Suggestions = () => {
  const users = [
    { id: 1, username: 'deepak', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU' },
    { id: 2, username: 'dharshan', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU' },
    { id: 3, username: 'aiswarya', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscz0eljIO4sQ0qkfpLJrgtl6Kvryp-DA-Hw&usqp=CAU' },
    { id: 4, username: 'abirami', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscz0eljIO4sQ0qkfpLJrgtl6Kvryp-DA-Hw&usqp=CAU' },
    { id: 5, username: 'abinaya', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscz0eljIO4sQ0qkfpLJrgtl6Kvryp-DA-Hw&usqp=CAU' },
    { id: 7, username: 'gautham', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU' },
    { id: 8, username: 'abisu', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscz0eljIO4sQ0qkfpLJrgtl6Kvryp-DA-Hw&usqp=CAU' },
    { id: 9, username: 'adi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU' },
    { id: 10, username: 'guhan', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU' },
    { id: 11, username: 'jashwanth', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&usqp=CAU' },
  ];

  return (
    <div className="suggestions">
      <h2>Suggestions</h2>
      <ul className="suggestions-list">
        {users.map((user) => (
          <li key={user.id}>
            <div className="suggestion-item">
              <img src={user.image} alt={user.username} className="profile-image" />
              <span className="user-name">@{user.username}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
