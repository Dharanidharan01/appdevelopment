import React from 'react';
import './Policy.css'; // Import a shared CSS file for styling

const PrivacyCookies = () => {
  return (
    <div className="policy-container">
      <div className="policy-box" id="privacy-box">
        <h1>Privacy Policy</h1>
        <p>
          Friendify is committed to protecting your privacy and ensuring the
          security of your personal information.
        </p>
        <p>
          We collect and process personal data in accordance with applicable
          privacy laws. The information you provide, such as your name, email
          address, and other details, is used for the purpose of providing and
          improving our services.
        </p>
        <p>
          Friendify may share your information with trusted third parties for
          specific purposes, such as analytics and advertising, while ensuring
          the confidentiality and security of your data.
        </p>
        <p>
          By using Friendify, you agree to the terms outlined in our Privacy
          Policy. You have the right to review, update, or delete your personal
          information at any time.
        </p>
        <p>
          This Privacy Policy may be updated periodically, and we recommend
          checking for any changes.
        </p>
        </div>
        {/* Separator */}
        <hr />
        <div className="policy-box" id="cookies-box">
        <h1>Cookies Policy</h1>
        <p>
          This website (Friendify) uses cookies to enhance the user experience
          and provide personalized content. By using our website, you consent to
          the use of cookies in accordance with our policy.
        </p>
        <p>
          Cookies are small text files stored on your device that help analyze
          web traffic, remember user preferences, and improve website
          performance.
        </p>
        <p>
          Cookies on Friendify may be set by us or by third-party providers
          such as analytics or advertising partners. 
        </p>
        <p>
          Friendify may use both session cookies and persistent cookies for various purposes, including analytics and
          personalized advertising.
        </p>
        <p>
          You can control and manage cookie preferences in your browser
          settings. Please note that disabling cookies may affect the
          functionality of certain features on the website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyCookies;