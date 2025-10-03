import { Link, useNavigate } from "react-router-dom";
import flitterIcon from "../assets/flitterIcon.svg";
import HomeIcon from "../assets/home.svg";
import profileIcon from "../assets/person.svg";
import settingsIcon from "../assets/settings.svg";
import logOutIcon from "../assets/logOut.svg";
import findIcon from "../assets/find_user.svg";
// import nodeIcon from "../assets/node.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const LeftNav = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("*****");
  const [userEmail, setUserEmail] = useState("**********");
  const [userImage, setUserImage] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const getUserDetails = async () => {
      if (!token) {
        navigate("/login");
      }
      try {
        const { data } = await axios.get("http://localhost:3000/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUsername(data.username);
        setUserEmail(data.email);
        setUserImage(data.profileImage);
      } catch (error) {
        console.log(error);
      }
    };

    getUserDetails();
  }, [token]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="left-nav">
      <div className="left-div" style={{ display: "flex" }}>
        Flitter
        <img
          src={flitterIcon}
          style={{ marginLeft: "5px", height: "30px", width: "30px" }}
          alt=""
        />
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          style={{ marginLeft: "50px" }}
        >
          {darkMode ? "☀️" : "🌙  "}
        </button>
      </div>

      <div className="username">
        <div
          className="username-image"
          style={{
            boxShadow: "0px 0px 4px grey",
          }}
        >
          <img
            src={userImage || flitterIcon}
            alt="user avatar"
            style={{
              borderRadius: "50%",
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <div>{username}</div>
          <div style={{ fontSize: "14px" }}>{userEmail}</div>
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

        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? "☀️ Light mode " : "🌙 Dark mode "}
        </button>
        <Link
          to="https://github.com/Rarejam/odin-book_flitter_app"
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
          onClick={handleLogout}
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
