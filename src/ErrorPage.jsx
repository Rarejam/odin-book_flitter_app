import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container">
      {/* Background orbs */}
      <div className="orb orb-purple"></div>
      <div className="orb orb-blue"></div>

      {/* Glassy card */}
      <div className="error-card">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Lost in Space</h2>
        <p className="error-text">
          The page you’re looking for seems to have drifted away. Let’s bring
          you back home.
        </p>

        <Link to="/" className="home-btn">
          Return Home
        </Link>
      </div>

      {/* Floating faded 404 */}
      <div className="floating-404">404</div>
    </div>
  );
};

export default ErrorPage;
