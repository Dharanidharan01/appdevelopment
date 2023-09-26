import React from 'react';

function RightsReserved() {
  return (
    <div className="rights-reserved">
      <h1>All Rights Reserved</h1>
      <p>&copy; {new Date().getFullYear()} Friendify</p>
      <p>
        This website and its content are protected by copyright law. Any
        unauthorized use, copying, or distribution of this content is
        prohibited.
      </p>
      <p>
        For inquiries or permissions, please contact us at{' '}
        <a href="mailto:dharanidharans175@gmail.com">dharanidharans175@gmail.com</a>.
      </p>
      <address>
        Friendify <br />
        123 Main Street <br />
        City, State ZIP Code <br />
        Phone: (123) 456-7890
      </address>
      <div className="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          This Privacy Policy outlines the types of personal information that Friendify may collect from you, how we use that information, and your rights and choices regarding your data. By using our services, you agree to the practices described in this policy.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address, date of birth, and location when you create an account on Friendify or use our services.
        </p>
        <h3>How We Use Your Information</h3>
        <p>
          We use your personal information to provide and improve our services, customize your experience, communicate with you, and send you updates about Friendify. We may also use your data to comply with legal obligations and protect our rights.
        </p>
        <h3>Sharing Your Information</h3>
        <p>
          We do not sell your personal information to third parties. However, we may share it with trusted service providers to help us operate and improve our services.
        </p>
        {/* Add more details as needed */}
      </div>
      <div className="cookies-policy">
        <h2>Cookies Policy</h2>
        <p>
          Friendify uses cookies to enhance your browsing experience. Cookies are small pieces of data that are stored on your device when you visit our website or use our services.
        </p>
        <h3>Types of Cookies</h3>
        <p>
          We use different types of cookies, including essential cookies, which are necessary for the website to function, and analytical cookies, which help us analyze website traffic and improve our services.
        </p>
        <h3>Your Choices</h3>
        <p>
          You can choose to accept or decline cookies through your browser settings. Please note that disabling cookies may affect your experience on our website.
        </p>
        <h3>More Information</h3>
        <p>
          For more details about how we use cookies and your options, please review our full Cookies Policy.
        </p>
      </div>
    </div>
  );
}

export default RightsReserved;
