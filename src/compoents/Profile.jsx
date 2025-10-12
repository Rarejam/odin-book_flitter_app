import { Link, Outlet } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";
import flitterIcon from "../assets/flitterIcon.svg";
import dateIcon from "../assets/calender.svg";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState("");
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("http://localhost:3000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
    };
    getUserInfo();
  }, [token]);
  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: "24px",
        }}
      >
        Loading
      </div>
    );
  }
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
        <div className="profile scroll-animate">
          <div className="profile-pic-div">
            <div className="profile-picture">
              <img
                src={user.profileImage || flitterIcon}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div style={{ fontStyle: "bold", fontSize: "26px" }}>
            {user.username}
          </div>
          <div style={{ fontSize: "16px", fontStyle: "italic", color: "grey" }}>
            {user.email}
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
            Joined on{" "}
            {user.createdAt ? new Date(user.createdAt).toLocaleString() : ""}
          </div>
          <div
            style={{ color: "grey", fontStyle: "italic", textAlign: "center" }}
          >
            --{user.bio || "No bio"}
          </div>

          <div style={{ display: "flex", gap: "10px", color: "grey" }}>
            <div>{user._count?.following} following</div>
            <div>{user._count?.followers} followers</div>
          </div>

          <div className="profile-nav">
            <Link to="/home/profile/" className="profile-link">
              Posts
            </Link>
            <Link to="/home/profile/comments" className="profile-link">
              Comments
            </Link>
            <Link to="/home/profile/reshares" className="profile-link">
              Reshares
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
