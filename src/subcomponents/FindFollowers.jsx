import { useEffect, useState } from "react";
import axios from "axios";
import flitterIcon from "../assets/flitterIcon.svg";
import dateIcon from "../assets/calender.svg";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const queryUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:3000/api/user/follower-users",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    queryUsers();
  }, [token]);

  const toggleFollow = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isFollowing: !user.isFollowing } : user
      )
    );
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: "24px",
        }}
      >
        No Users Found
      </div>
    );
  }
  return (
    <div className="users-div">
      {users.map((user) => (
        <div className="user scroll-animate" key={user.id}>
          <div className="profile">
            <div className="profile-pic-div">
              <Link to={`/home/profile/${user.id}`}>
                <div className="profile-picture">
                  <img
                    src={user.profileImage || flitterIcon} // ✅ real image with fallback
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
            <div style={{ fontStyle: "bold", fontSize: "26px" }}>
              {user.username}
            </div>

            {/* handle */}
            <div
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                color: "grey",
              }}
            >
              @{user.email?.split("@")[0]}
            </div>

            {/* joined */}
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
              Joined on {new Date(user.createdAt).toLocaleDateString()}
            </div>

            {/* followers/following */}
            <div style={{ display: "flex", gap: "10px", color: "grey" }}>
              <div>{user.following?.length || 0} following</div>
              <div>{user.followers?.length || 0} followers</div>
            </div>

            {/* buttons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "15px",
              }}
            >
              <button
                style={{
                  width: "8vw",
                  height: "2em",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#1da1f2",
                  color: "white",
                }}
                onClick={() => toggleFollow(user.id)}
              >
                {user.isFollowing ? "unfollow" : "follow"}
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
                  view
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
