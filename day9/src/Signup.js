import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css';
import { setUser } from './profileComponent/userActions';

const Signup = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate(); // Use useNavigate hook

  
  const handleSignup = () => {
   
    onSignup(name);

    
    navigate('/home');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date of Birth"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
