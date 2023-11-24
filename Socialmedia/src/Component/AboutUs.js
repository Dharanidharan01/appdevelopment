import React, { useEffect, useState } from 'react';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-section">
      <h1 style={{ color: '#fff' }}>About Our Social Media App</h1>
        <p>
          Welcome to our vibrant community! Our social media app is designed to
          connect people from all walks of life, allowing them to share their
          experiences, thoughts, and memories with friends and family.
        </p>
        <p>
          At the core of our app is the belief that social media should be a
          positive and enriching experience. We strive to create a platform that
          fosters meaningful connections, promotes creativity, and respects the
          privacy and security of our users.
        </p>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Effortless Sharing: Share your moments with a simple click.</li>
          <li>Customizable Profiles: Personalize your profile to reflect you.</li>
          <li>Real-time Updates: Stay connected with friends in real-time.</li>
          <li>Privacy Controls: Control who sees your content with ease.</li>
          <li>Community Engagement: Engage with a diverse and supportive community.</li>
        </ul>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a platform that encourages genuine
          connections, fosters creativity, and respects user privacy. We are
          committed to continually improving and evolving to meet the changing
          needs of our users while maintaining a positive and inclusive
          environment.
        </p>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <p>
          Meet the talented individuals behind our social media app. Our team
          is passionate about creating a seamless and enjoyable experience for
          our users. Together, we work towards building a community-driven
          platform that brings people together.
        </p>
        {/* Add team member profiles here */}
      </section>

      <section className="technology-section">
        <h2>Technology Stack</h2>
        <p>
          Our app is built using cutting-edge technologies to ensure a
          responsive, secure, and feature-rich experience. We leverage
          technologies such as React for the frontend, Node.js for the backend,
          and MongoDB for data storage.
        </p>
      </section>

      <section className="join-us-section">
        <h2>Join Us</h2>
        <p>
          Are you passionate about social media, technology, and creating
          meaningful connections? Join our team! Check out our{' '}
          <a href="/careers">careers</a> page for current job openings and
          opportunities to be part of our exciting journey.
        </p>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Have questions, suggestions, or feedback? We'd love to hear from you!
          Reach out to us at{' '}
          <a href="mailto:info@example.com">info@friendify.com</a>.
        </p>
      </section>
    </div>
  );
};
export default AboutUs;