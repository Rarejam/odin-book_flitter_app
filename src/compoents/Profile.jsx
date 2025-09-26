import { Link, Outlet } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";
import flitterIcon from "../assets/flitterIcon.svg";
import dateIcon from "../assets/calender.svg";

const Profile = () => {
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
        <div>Profile</div>
      </div>

      <div className="settings-content">
        <div className="profile">
          <div className="profile-pic-div">
            <div className="profile-picture">
              <img src={flitterIcon} alt="" />
            </div>
          </div>
          <div style={{ fontStyle: "bold", fontSize: "26px" }}>Rarejam</div>
          <div style={{ fontSize: "16px", fontStyle: "italic", color: "grey" }}>
            @agarajamaldeen4ce96c
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "grey",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <img
              src={dateIcon}
              alt=""
              style={{
                height: "15px",
                width: "15px",
              }}
            />{" "}
            Joined on September 2025
          </div>
          <div style={{ display: "flex", gap: "10px", color: "grey" }}>
            <div>1 follwoing</div>
            <div> 0 followers</div>
          </div>

          <div className="profile-nav">
            <Link to="/home/profile/" className="profile-link">
              Posts
            </Link>
            <Link to="/home/profile/comments" className="profile-link">
              Comments
            </Link>
            <Link to="/home/profile/following" className="profile-link">
              Following
            </Link>
          </div>
        </div>
        <div className="profile-nav-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
