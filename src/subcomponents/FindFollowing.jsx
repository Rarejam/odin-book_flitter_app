import { useEffect, useState } from "react";
import axios from "axios";
import flitterIcon from "../assets/flitterIcon.svg";
import dateIcon from "../assets/calender.svg";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const queryUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:3000/api/user/following-users",
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
  if (loading == true) {
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
        Loading...
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
        <div className="user" key={user.id}>
          <div className="profile">
            <div className="profile-pic-div">
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
