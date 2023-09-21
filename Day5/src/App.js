import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    // Implement your authentication logic here.
    // Check the username and password against your database or other authentication system.
    // If authentication is successful, set the user state with the username.
    // For now, we'll just set the user state to demonstrate the login functionality.
    setUser(username);
  };

  const handleSignup = (username) => {
    // Implement your sign-up logic here.
    // Create a new user in your database or user management system.
    // For now, we'll just set the user state with the username.
    setUser(username);
  };

  return (
    <Router>
      <nav>
        <ul>
          
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/home" element={<Home username={user} />} />
      </Routes>
    </Router>
  );
};

export default App;
