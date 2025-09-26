import { useState } from "react";
import { Link } from "react-router-dom";
import flitterIcon from "../assets/flitterIcon.svg";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`index-container ${darkMode ? "dark" : "light"}`}>
      <div className="index-header">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <h1>Flitter</h1>
          <img
            src={flitterIcon}
            alt="Flitter Icon"
            style={{ width: "60px", height: "60px" }}
          />
        </div>
        <div>
          <Link to="/login" className="index-link">
            Login
          </Link>
          <Link to="/signup" className="index-link">
            Signup
          </Link>
          <button onClick={toggleTheme} className="theme-toggle">
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
      <hr />

      <div className="index-content">
        <div className="hero">
          <h2>
            Welcome to Flitter{" "}
            <img
              src={flitterIcon}
              style={{ height: "30px", width: "30px" }}
              alt=""
            />
          </h2>
          <p>
            A fun and simple way to share your thoughts in short posts and
            connect with others instantly.
          </p>
        </div>

        <div className="features">
          <div className="feature">
            <h3>💬 Post Your Thoughts</h3>
            <p>Share short updates with your friends and followers.</p>
          </div>
          <div className="feature">
            <h3>👥 Connect</h3>
            <p>Follow people, like posts, and build your community.</p>
          </div>
          <div className="feature">
            <h3>⚡ Fast & Simple</h3>
            <p>No clutter. Just pure conversation and vibes.</p>
          </div>
        </div>

        <div className="cta">
          <h2>Ready to start Flittering?</h2>
          <Link to="/signup" className="cta-button">
            Join Now
          </Link>
        </div>
      </div>

      <hr />

      <div className="index-footer">
        <p>© {new Date().getFullYear()} Flitter. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/">About</Link>
          <Link to="/">Privacy</Link>
          <Link to="https://github.com/">Github</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
