import { Link, Outlet } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg";
import flitterIcon from "../assets/flitterIcon.svg";
import dateIcon from "../assets/calender.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      <div className="users-div" style={{ height: "100vh" }}>
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
          {[1].map((i) => (
            <div
              key={i}
              className="user"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 4px whitesmoke",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                marginBottom: "20px",
                width: "80%",
                maxWidth: "300px",
                marginInline: "auto",
              }}
            >
              {/* profile pic */}
              <Skeleton
                circle
                height={200}
                width={200}
                style={{ marginBottom: "10px" }}
              />

              {/* username */}
              <Skeleton height={20} width="60%" />

              {/* handle */}
              <Skeleton height={15} width="40%" />

              {/* joined date */}
              <Skeleton height={15} width="50%" />

              {/* follower counts */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Skeleton height={15} width={60} />
                <Skeleton height={15} width={60} />
              </div>

              {/* buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Skeleton height={35} width={90} borderRadius={8} />
                <Skeleton height={35} width={90} borderRadius={8} />
              </div>
            </div>
          ))}
        </SkeletonTheme>
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
