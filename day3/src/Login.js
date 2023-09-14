import React, { useState } from 'react';
import './Registration.css'; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({}); // For form field validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic client-side validation (you can add more specific checks)
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // Proceed with login if there are no validation errors
      console.log('Login data:', formData);
    } else {
      // Set validation errors
      setErrors(newErrors);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-logo">
        <img
          src="https://cdn.dribbble.com/userupload/10073509/file/original-1de32e541052e54ae2df360d338438e4.png?resize=1200x1200" // Replace with the path to your app's logo
          alt="Logo"
          className="logo-image"
        />
      </div>
      <div className="registration-form">
        <h2>Login to Friendify</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/registration">Register here</a></p>
      </div>
      <div className="registration-footer">
        &copy; 2023 Your App Name. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
