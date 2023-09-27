import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import LandingPage from "./Component/LandingPage";
import Footer from './Component/Footer';
import AboutUs from "./Component/AboutUs";
import ContactUs from "./ContactUs";
import Chatbot from "./Component/Chatbot";
import RightsReserved from "./Component/RightsReserved";
import User from "./User";

const App = () => {
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleSignup = (username) => {
    
    setUser(username);
  };

  return (
    <Router>
      <nav>
        <ul>
          
        </ul>
      </nav>

      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/home" element={<Home username={user} />} />
        <Route path="/aboutus" element={<AboutUs username={user} />} />
        <Route path="/contactus" element={<ContactUs username={user} />} />
        <Route path="/chatbot" element={<Chatbot username={user} />} />
        <Route path="/rightsreserved" element={<RightsReserved username={user} />} />
        <Route path="/user" element={<User username={user} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
