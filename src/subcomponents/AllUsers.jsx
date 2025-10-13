import { useEffect, useState } from "react";
import axios from "axios";
import flitterIcon from "../assets/flitterIcon.svg";
import dateIcon from "../assets/calender.svg";
import spinnerGif from "../assets/spinner.gif";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllUsers = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:3000/api/all-users",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUsers(data || []);
      } catch (error) {
        console.log("Error fetching users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [token]);

  const handleFollow = async (userId) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/follow/${userId}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // prevent user from following themselves
      if (userId === parseInt(localStorage.getItem("userId"))) {
        alert("You can’t follow yourself!");
        return;
      }

      // toggle follow/unfollow in UI
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, followed: data.followed } : u
        )
      );
    } catch (err) {
      console.error("Error following/unfollowing:", err);
    }
  };

  if (loading) {
    return (
      <div className="users-div">
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
          {[1, 2, 3, 4].map((i) => (
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
                maxWidth: "200px",
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
  if (users.length == 0) {
    return (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
          fontSize: "24px",
        }}
      >
        <img style={{ borderRadius: "50%" }} src={spinnerGif} alt="" />
      </div>
    );
  }
  return (
    <div className="users-div">
      {users.map((user) => (
        <div className="user scroll-animate" key={user.id}>
          <div className="profile">
            {/* profile pic */}
            <div className="profile-pic-div">
              <Link to={`/home/profile/${user.id}`}>
                <div className="profile-picture">
                  <img
                    src={user.profileImage || flitterIcon}
                    alt={user.username}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Link>
            </div>

            {/* username */}
            <div style={{ fontWeight: "bold", fontSize: "26px" }}>
              {user.username}
            </div>

            {/* handle */}
            <div
              style={{ fontSize: "16px", fontStyle: "italic", color: "grey" }}
            >
              @{user.email?.split("@")[0]}
            </div>

            {/* joined date */}
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
                alt="joined"
                style={{ height: "15px", width: "15px" }}
              />
              Joined on{" "}
              {user.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : "Unknown"}
            </div>

            {/* follower counts */}
            <div style={{ display: "flex", gap: "10px", color: "grey" }}>
              <div>{user._count?.following || 0} following</div>
              <div>{user._count?.followers || 0} followers</div>
            </div>

            {/* buttons */}
            <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
              <button
                onClick={() => handleFollow(user.id)}
                style={{
                  width: "8vw",
                  height: "2em",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: user.followed ? "grey" : "#1da1f2",
                  color: "white",
                }}
              >
                {user.followed ? "Unfollow" : "Follow"}
              </button>

              <Link to={`/home/profile/${user.id}`}>
                <button
                  style={{
                    width: "8vw",
                    height: "2em",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "#1da1f2",
                    color: "white",
                  }}
                >
                  View
                </button>
              </Link>
            </div>

            <Link
              to={`/home/text/${user.id}`}
              className="text-btn"
              style={{ backgroundColor: "red" }}
            >
              <button
                className="text-btn"
                style={{ height: "100%", width: "100%" }}
              >
                Text
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
