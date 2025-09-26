import { Link } from "react-router-dom";
import flitterIcon from "../assets/flitterIcon.svg";
import HomeIcon from "../assets/home.svg";
import profileIcon from "../assets/person.svg";
import settingsIcon from "../assets/settings.svg";
import logOutIcon from "../assets/logOut.svg";
import findIcon from "../assets/find_user.svg";
import { useState } from "react";

const LeftNav = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };
  return (
    <div className="left-nav">
      <div className="left-div">
        Flitter
        <img
          src={flitterIcon}
          style={{ marginLeft: "5px", height: "30px", width: "30px" }}
          alt=""
        />
      </div>

      <div className="username">
        <div className="username-image">
          <img src={flitterIcon} alt="user avatar" />
        </div>
        <div>
          <div>Jamal</div>
          <div style={{ fontSize: "14px" }}>@rarejamthegoat</div>
        </div>
      </div>

      <div className="nav-link-div">
        <Link
          className="nav-link"
          to="/home/"
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "18px",
            fontStyle: "bold",
            gap: "5px",
          }}
        >
          {" "}
          <img
            src={HomeIcon}
            alt=""
            style={{
              width: "30px",
              height: "30px",
            }}
          />
          Home
        </Link>
        <Link
          className="nav-link"
          to="/home/users"
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "18px",
            fontStyle: "bold",
            gap: "5px",
          }}
        >
          <img
            src={findIcon}
            alt=""
            style={{
              width: "30px",
              height: "30px",
            }}
          />
          Find Users
        </Link>
        <Link
          className="nav-link"
          to="/home/profile"
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "18px",
            fontStyle: "bold",
            gap: "5px",
          }}
        >
          <img
            src={profileIcon}
            alt=""
            style={{
              width: "30px",
              height: "30px",
            }}
          />
          Profile
        </Link>
        <Link
          className="nav-link"
          to="/home/settings"
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "18px",
            fontStyle: "bold",
            gap: "5px",
          }}
        >
          <img
            src={settingsIcon}
            alt=""
            style={{
              width: "30px",
              height: "30px",
            }}
          />
          Settings
        </Link>
        {/* <Link
          className="nav-link"
          to="/home/create"
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "18px",
            fontStyle: "bold",
            gap: "5px",
          }}
        >
          <img
            src={createIcon}
            style={{
              width: "30px",
              height: "30px",
            }}
            alt=""
          />
          Create Post
        </Link> */}
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "🌙 Dark mode" : "☀️ Light mode"}
        </button>
        <Link
          className="nav-link"
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "18px",
            fontStyle: "bold",
            gap: "5px",
          }}
        >
          {" "}
          <img
            src="https://cdn.simpleicons.org/github/000"
            style={{
              width: "30px",
              height: "30px",
            }}
            alt=""
          />
          Github
        </Link>
        <Link
          className="nav-link"
          style={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "18px",
            fontStyle: "bold",
            gap: "5px",
          }}
        >
          <img
            src={logOutIcon}
            alt=""
            style={{
              width: "30px",
              height: "30px",
            }}
          />{" "}
          Logout
        </Link>
      </div>
    </div>
  );
};

export default LeftNav;
