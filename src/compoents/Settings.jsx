import { Link } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";
import eyeIcon from "../assets/eye.png";
import { useState } from "react";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="settings-header">
        <Link
          to="/home"
          style={{
            textDecoration: "none",
          }}
          className="settings-header-link"
        >
          <img src={ArrowIcon} alt="" style={{}} />
        </Link>
        <div>Settings</div>
      </div>

      <div className="settings-content">
        <form className="settings-first-form">
          <div>
            <label htmlFor="profile_picture" className="upload-label">
              Upload Profile Picture
            </label>
            <input
              type="file"
              id="profile_picture"
              name="profile_picture"
              className="upload-input"
            />
          </div>
        </form>

        <form className="settings-second-form">
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="update username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="update email" />
          </div>
          <div className="bio-textarea-div">
            <label htmlFor="bio">Bio</label>
            <textarea
              type="text"
              id="bio"
              placeholder="update bio"
              className="bio-textarea"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type={showPassword == true ? "text" : "password"}
              id="password"
              placeholder="update password or leave empty"
              style={{
                position: "relative",
              }}
            />
            <img
              onClick={() => setShowPassword(!showPassword)}
              src={eyeIcon}
              alt=""
              style={{
                position: "absolute",
                height: "26px",
                width: "26px",
                right: "3%",
                top: "56%",
              }}
            />
          </div>
          <button>Save Changes</button>
          <button
            style={{
              backgroundColor: "rgb(252, 52, 52)",
            }}
          >
            Delete User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
